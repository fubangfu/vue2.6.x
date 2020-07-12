/**
 * index
 * @author  fubangfu2015@163.com
 * @data    2020/7/12
 * --------------------------------------
 */
import AqireInput from './packages/input/AqireInput';

const components = [
   AqireInput
];

function install( Vue, opts = {} ) {
   components.forEach( component => {
      if ( component.CONFIG && opts[component.name] ) {
         component.CONFIG( opts[component.name] );
      }
      Vue['component']( component.name, component );
   } );
}

export default {
   install,
   AqireInput
};
