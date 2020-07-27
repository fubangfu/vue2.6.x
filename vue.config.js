/**
 * vue.config.js
 * @author      fubangfu2015@163.com
 * @date        2020/4/26
 * --------------------------------------------
 */

const replacements = {
   __NAMESPACE__ : 'aqire',
   __VERSION__   : require( './package.json' ).version
};

Object.keys( replacements ).forEach( key => {
   process.env[`VUE_APP${key}`] = replacements[key];
} );

process.env.VUE_APP__VERSION__ = require( './package.json' ).version;

function wrapCode( render ) {
   return function ( ...args ) {
      return render( ...args )
          .replace( '<code class="', '<code class="hljs ' )
          .replace( '<code>', '<code class="hljs">' );
   };
}

module.exports = {
   runtimeCompiler     : false,// 是否使用包含运行时编译器的 Vue 构建版本
   filenameHashing     : false,// 启用文件名哈希
   publicPath          : process.env.NODE_ENV === 'production' ? '' : '/',
   lintOnSave          : true,
   productionSourceMap : false, // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
   configureWebpack    : {
      // mode    : 'development',
      // devtool : 'source-map'
   },
   chainWebpack        : config => {

      config.module.rule( 'md' )
          .test( /\.md/ )
          .use( 'vue-loader' )
          .loader( 'vue-loader' )
          .end()
          .use( 'vue-markdown-loader' )
          .loader( 'vue-markdown-loader/lib/markdown-compiler' )
          .options( {
             raw     : true,
             linkify : false,
             /*highlight( str, lang ) {
                if ( lang === 'demo' ) {
                   console.log( '>>>>>>>>>>>>>>>>>>>>>>>' );
                   console.log( str );
                   console.log( '>>>>>>>>>>>>>>>>>>>>>>>' );
                }
                return str;
             },*/
             // 定义处理规则
             preprocess( MarkdownIt, source ) {
                const rules = MarkdownIt.renderer.rules;
                // 对于markdown中的table,
                rules.table_open = function () {
                   return '<table class="table">';
                };
                // 对于代码块去除v-pre,添加高亮样式
                rules.fence = wrapCode( rules.fence );
                // `code` 给这种样式加个class code_inline
                const code_inline = rules.code_inline;
                rules.code_inline = function ( ...args ) {
                   args[0][args[1]].attrJoin( 'class', 'code_inline' );
                   return code_inline( ...args );
                };
                return source;
             }
          } );
   },
   devServer           : {
      port  : 8888, // 端口号
      host  : 'localhost',
      open  : false,
      proxy : {
         '/api' : {
            target       : '<url>',
            ws           : true,
            changeOrigin : true
         },
         '/foo' : {
            target : '<other_url>'
         }
      }
   }
};
