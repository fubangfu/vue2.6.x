/**
 * 将views目录下的 *.md文件按照目录结构自动配置路由和导航
 * 将views目录下的 *.vue示例文件装载到同级目录的 *.md文件组件中
 *
 * 注意：md、vue文件命名规则：字母、横杠
 * 注意：每个子级目录中md文件名必须与目录同名
 * @author      fubangfu2015@163.com
 * @date        2020/7/29
 * --------------------------------------------
 */
import NAV from './navigation.json';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );
// 页面缓存
const pageMapper = {};
const routes = createRoutes();
Vue.prototype.__pages__ = createNavigation();

export default new VueRouter( {
   mode   : 'hash',
   base   : process.env.BASE_URL,
   routes : [
      {
         path     : '/',
         redirect : '/overview'
      },
      ...routes
   ]
} );

// 创建路由
function createRoutes() {
   const R_VUE = /\.vue$/;
   const R_FILENAME = /\.\w+$/;
   const R_EXEC_MD = /[\\/]([\w-]+)[\\/]([\w-]+)\.md$/;

   // 示例缓存
   const exampleMapper = {};
   // 获取 pages目录下的 *.md  *.vue文件
   const pageContext = require.context(
       './pages',
       true,
       /\.(md|vue)$/,
       'lazy' // 懒加载
   );

   // 创建并返回路由
   return pageContext.keys().map( pathStr => {
      const exec = R_EXEC_MD.exec( pathStr );
      // 如果md文件的文件名与父级目录同名
      // 则建立路由和导航
      if ( exec && exec[1] === exec[2] ) {
         const parsed = parse( pathStr );
         if ( !pageMapper[parsed.path] ) {
            // 缓存页面配置
            pageMapper[parsed.path] = setNav( parsed );
            return createRoute( parsed );
         }
         // 如果是 vue示例文件
      } else if ( R_VUE.test( pathStr ) ) {
         const parsed = parse( pathStr );
         const example = exampleMapper[parsed.path] || {};
         // 懒加载的关键：
         // 绑定一个函数，而不是直接执行 pageContext( id )
         // 执行pageContext( id )，将直接加载对应组件
         example[parsed.filename] = () => pageContext( parsed.id );
         exampleMapper[parsed.path] = example;
      }
   } )
       .filter( Boolean );


   // 创建路由
   function createRoute( parsed ) {
      return {
         path : parsed.path,
         // 懒加载的关键：
         // 返回一个函数，而不是直接执行 pageContext( id )
         // 执行pageContext( id )，将直接加载对应组件
         component() {
            return pageContext( parsed.id ).then( module => {
               // 将同级的vue示例组件注册到md页面组件中
               registerExample( parsed.path, module.default );
               return module;
            } );
         }
      };
   }

   // 注册示例组件
   function registerExample( path, component ) {
      const examples = exampleMapper[path];
      // 将vue示例组件注册到md页面组件中
      if ( examples ) component.components = examples;
   }

   // 解析文件路径
   function parse( path ) {
      const splited = path.substr( 2 ).split( /[\\/]/ );
      const file = splited.pop();
      return {
         // ./form/btn/btn.md
         id       : path,
         // btn.md
         file,
         // btn
         filename : file.replace( R_FILENAME, '' ),
         // ['form','btn']
         paths    : splited,
         // /form/btn
         path     : join( splited ),
         // ['form']
         parent   : splited.slice( 0, -1 )
      };
   }
}

// 创建导航
function createNavigation() {
   const roots = [];
   //
   Object.keys( pageMapper ).forEach( path => {
      const page = pageMapper[path];
      const parent = getParent( page );
      // 如果有父级导航
      if ( parent && (
          parent.children
          || (parent.children = [])
      ) ) {
         parent.children.push( page );
      }
   } );

   return roots;

   // 获取父级或创建父级导航
   function getParent( page ) {
      // 根导航
      if ( !page.parent.length ) {
         roots.push( page );
         return;
      }
      const path = join( page.parent );
      // 如果不存在父级导航
      if ( !pageMapper[path] ) {
         const parent = page.parent.slice();
         const parsed = setNav( {
            path,
            paths    : parent,
            filename : parent.pop(),
            parent
         } );
         pageMapper[path] = parsed;
         getParent( parsed );
      }

      return pageMapper[path];
   }

}

/**
 * 设置导航信息
 * @param parsed
 * @return {{pathStr: string, parent: [], title: string, order: *}}
 */
function setNav( parsed ) {
   const nav = NAV[parsed.path];
   return {
      ...nav,
      ...parsed,
      title : nav && nav.title || parsed.filename
   };
}

/**
 * 转为路由路径
 * @param paths
 * @return {string}
 */
function join( paths ) {
   return `/${paths.join( '\/' )}`;
}
