/**
 * 例子
 * 注意1：vue组件和md组件的name名称必须同名（md组件的name名与文件名相同）
 * 注意2：目录结构层次也必须保持一致
 * @author  fubangfu2015@163.com
 * @data    2020/7/4
 * --------------------------------------
 */

// 获取example目录下所有的vue组件
const exampleContext = require.context(
    './example',
    true,
    /\.vue$/,
    'lazy'
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

