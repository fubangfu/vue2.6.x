/**
 * 示例，为MD文档提供组件效果展示
 *
 * @author  fubangfu2015@163.com
 * @data    2020/7/4
 * --------------------------------------
 */
// 获取example目录下所有的vue组件
const exampleContext = require.context(
    './views',
    true,
    /\.vue$/,
    'lazy' // 懒加载
);

const exampleContext2 = null;

export default exampleContext.keys().reduce( ( previousValue, currentValue ) => {
   const paths = splitPath( currentValue );
   const path = `/${paths.join( '\/' )}`;
   // 延时加载组件的关键：返回一个函数，而不是直接执行exampleContext( currentValue )
   previousValue[path] = () => exampleContext( currentValue );
   return previousValue;
}, {} );

/**
 * 拆分文件路径
 * @param path
 */
function splitPath( path ) {
   return path.replace( /\.vue$/, '' )
       .split( '\/' )
       .filter( p => !p.includes( '\.' ) );
}

