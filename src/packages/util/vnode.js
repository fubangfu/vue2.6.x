import { isArr, isBool, isFunc } from '@aqire/common/src/type';
import { findIndex, includeArray } from '@aqire/common/src/lang/array';

/**
 * 虚拟节点相关工具类
 * @author  fubangfu2015@163.com
 * @data    2020/7/12
 * --------------------------------------
 */

/**
 * 添加监听函数
 * @param first
 * @param listeners
 * @param event
 * @param cb
 */
export function addVNodeListener( first, listeners, event, cb ) {
   if ( !isBool( first ) ) {
      cb = event;
      event = listeners;
      listeners = first;
      first = false;
   }
   // 已经监听的函数
   const callbacks = listeners[event];
   // 如果没有监听函数
   if ( !callbacks ) {
      listeners[event] = cb;

      // 如果是函数，且不是同一个cb
   } else if ( isFunc( callbacks ) && callbacks !== cb ) {
      listeners[event] = first ? [cb, callbacks] : [callbacks, cb];

      // 如果是数组，且没有监听过cb
   } else if ( isArr( callbacks ) && !includeArray( callbacks, cb ) ) {
      first ? callbacks.unshift( cb ) : callbacks.push( cb );
   }
}

/**
 * 移除监听函数
 * @param listeners
 * @param event
 * @param cb
 */
export function removeVNodeListener( listeners, event, cb ) {
   const callbacks = listeners[event];
   // 如果是函数，且是同一个 cb
   if ( isFunc( callbacks ) && cb === callbacks ) {
      listeners[event] = null;
      delete listeners[event];
      // 如果是数组
   } else if ( isArr( callbacks ) ) {
      const index = findIndex( callbacks, cb );
      // 存在当前的cb
      if ( index >= 0 ) callbacks.split( index, 1 );
   }
}

/**
 * 执行监听的函数
 * @param listeners
 * @param event
 * @param context
 * @param args
 */
export function callVNodeListener( listeners, event, context, ...args ) {
   const callbacks = listeners[event];
   // 如果是函数
   if ( isFunc( callbacks ) ) {
      callbacks.apply( context, args );
      // 如果是数组
   } else if ( isArr( callbacks ) ) {
      callbacks.forEach( cb => {
         cb.apply( context, args );
      } );
   }
}
