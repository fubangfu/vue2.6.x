/**
 * 示例，为MD文档提供组件效果展示
 * 注意1：example目录下的Vue组件的name名称必须和views目录下的MD文档组件的name名称保持一致
 *       MD组件文档的name名默认与文件名相同
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

