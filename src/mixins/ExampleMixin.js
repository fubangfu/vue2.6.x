/**
 * 混入示例组件
 * @author  fubangfu2015@163.com
 * @data    2020/7/5
 * --------------------------------------
 */
export default {
   props   : {
      i : {
         type    : [Number, String],
         default : 1
      }
   },
   methods : {
      eq( index ) {
         return this._q( index, this.i );
      }
   }
};
