/**
 * 示例，为MD文档提供组件效果展示
 * 注意1：example目录下的Vue示例组件必须和views目录下的MD文档组件同名
 * 注意2：example目录结构层次也必须和views的目录结构保持一致
 *
 * @author  fubangfu2015@163.com
 * @data    2020/7/4
 * --------------------------------------
 */
// 获取example目录下所有的vue组件
const exampleContext = require.context(
    './example',
    true,
    /\.vue$/,
    'lazy' // 懒加载
);

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

