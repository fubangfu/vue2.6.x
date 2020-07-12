import { mix } from '@aqire/common/src/lang/object';

/**
 * @author  fubangfu2015@163.com
 * @data    2020/7/12
 * @param name
 * @param defaults
 */
export default function createConfig( name, defaults = null ) {
   const CONFIG = Object.create( defaults );
   return {
      CONFIG,
      configs( config ) {
         mix( true, CONFIG, config );
      }
   };
}
