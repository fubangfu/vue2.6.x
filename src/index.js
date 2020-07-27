/**
 * index
 * @author  fubangfu2015@163.com
 * @data    2020/7/12
 * --------------------------------------
 */
import AqireInput from './packages/input/AqireInput';
import { isGlobal } from '@aqire/common/src/type';
import './packages/theme/index.scss';

const components = [
   AqireInput
];

function install( Vue ) {
   components.forEach( component => {
      Vue['component']( component.name, component );
   } );
}

if ( isGlobal( window ) && window.Vue ) {
   install( window.Vue );
}

export default {
   install,
   AqireInput
};
