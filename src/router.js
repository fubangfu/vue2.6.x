import Vue from 'vue';
import VueRouter from 'vue-router';
import navigation from './navigation.json';
import PageView from './components/page/PageView';

/**
 * 路由配置，自动将views下的MD组件文档按照目录机构配置路由和导航
 * 所有路由都是懒加载的
 */
Vue.use( VueRouter );
// 添加__pages__变量，给导航组件使用
const routes = Vue.prototype.__pages__ = getRoutes();
//
const router = new VueRouter( {
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

export default router;

/**
 * 根据文件目录结构，构建路由
 * @return {[]}
 */
function getRoutes() {

   const pageMapper = {};
   const routeViews = [];
   // 将views目录下的.md文件按照目录结构自动配置路由
   // 注意：md文件命名规则：字母和横杠
   const pageContext = require.context(
       './views',
       true,
       /\.md$/,
       'lazy' // 懒加载
   );
   // 解析路径
   pageContext.keys().map( pathStr => {
      // 按目录层次分割成数组
      const paths = splitPath( pathStr );
      // 路由路径
      const path = `/${paths.join( '\/' )}`;
      // 创建路由
      const route = createRoute( paths, path );
      //
      return pageMapper[path] = {
         ...route,
         component : () => pageContext( pathStr )
      };
   } )
       .forEach( setChildren );

   return routeViews;

   /**
    * 设定子路由
    * @param route
    */
   function setChildren( route ) {
      const parent = setParent( route );
      if ( parent && (
          parent.children || (parent.children = [])
      ) ) {
         parent.children.push( route );
      }
   }

   /**
    * 设定父路由
    * @param route
    */
   function setParent( route ) {
      // 如果没有父级路由
      // 说明他是最顶层的路由
      if ( !route.parent ) {
         routeViews.push( route );
         return;
      }
      const paths = route.parent;
      // 父路由路径
      const parentPath = `/${paths.join( '\/' )}`;
      let parent = pageMapper[parentPath];
      // 如果没有真实md组件
      if ( !parent ) {
         // 那么就创建一个
         parent = createRoute( paths, parentPath );
         parent.path = parentPath;
         // 给父路由绑定一个router-view组件
         // 使它能正常的路由到子路由上
         parent.component = PageView;
         // parent.redirect = route.path;
         pageMapper[parentPath] = parent;
         // 继续设定它的父级路由
         setParent( parent );
      }
      return parent;
   }

   /**
    * 创建路由对象
    * @param paths
    * @param path
    * @return {{title: *, order: (*|number)} & {path: *, parent: (boolean|*), paths: *}}
    */
   function createRoute( paths, path ) {
      // 获取路由导航配置信息
      const nav = getNav( path, paths );
      return Object.assign( nav, {
         path,
         paths,
         // 如果没有父级路由，则值为false
         parent : paths.length > 1 && paths.slice( 0, -1 )
      } );
   }

}

/**
 * 获取导航配置信息
 * @param path
 * @param paths
 * @return {{title: *, order: (*|number)}}
 */
function getNav( path, paths ) {
   const data = navigation[path];
   return {
      // order值越小，越排在最前面
      order : data && data[1] || 99,
      title : Array.isArray( data ) && data[0]
          || data || paths.slice( -1 )[0]
   };
}

/**
 * 拆分文件路径
 * @param path
 */
function splitPath( path ) {
   return path.replace( /\.md$/, '' )
       .split( '\/' )
       .filter( p => !p.includes( '\.' ) );
}

