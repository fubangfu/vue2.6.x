/**
 * Css BEM 命名规范工具
 * @author      fubangfu2015@163.com
 * @date        2020/7/21
 *
 * const em = bemHelper('btn')                        s-btn
 * em('wrap')                                   s-btn-wrap
 * em({ mini:true })                            s-btn-mini
 * em('wrap',{ mini:true })                     s-btn-wrap-mini
 * em('wrap',{ mini:true, small : true })       s-btn-wrap-mini s-btn-wrap-small
 * -------------------------------------------------------------------------------
 */
const NAMESPACE = 'aqire';
const ELEMENT_SEPARATOR = '__';
const MODIFIER_SEPARATOR = '--';
const STATE_PREFIX = 'is--';

function prefix( block, element ) {
   element = element.trim();
   return `${NAMESPACE}-${block}${element.length ? `${ELEMENT_SEPARATOR}${element}` : ''}`;
}

function modifiers( pre, modifier ) {
   // 数组
   if ( Array.isArray( modifier ) ) {
      return modifier
          .map( mdr => `${pre}${MODIFIER_SEPARATOR}${mdr}` )
          .join( ' ' );
      // 对象
   } else if ( modifier && typeof modifier === 'object' ) {
      return Object.keys( modifier )
          .filter( mdr => modifier[mdr] )
          .map( mdr => `${pre}${MODIFIER_SEPARATOR}${mdr}` );
   }
   return pre;
}

export function bemHelper( block ) {
   if ( typeof block !== 'string' ) {
      throw new Error( '"block" must be a string.' );
   }
   return function be( element, modifier ) {

      if ( typeof element !== 'string' ) {
         modifier = element;
         element = '';
      }
      return modifiers(
          prefix( block, element ),
          modifier
      );
   };
}

export function when( state ) {
   state = typeof state === 'string' && state.trim();
   return state.length ? `${STATE_PREFIX}${state}` : '';
}
