<template>
    <component :is="needWrap ? 'div' : 'AqireChild'"
               class="aqire-input-wrap"
               :class="className">
        <!-- textarea -->
        <textarea v-if="isTextarea"
                  v-bind="$attrs"
                  v-on="listeners"
                  :readonly="readonly"
                  :disabled="disabled"
                  class="aqire-input"></textarea>
        <!-- input text -->
        <input v-else
               :type="nativeType"
               v-bind="$attrs"
               v-on="listeners"
               :readonly="readonly"
               :disabled="disabled"
               class="aqire-input">
    </component>
</template>

<script>
   import { isBlank } from '@aqire/common/src/type';
   import { trimStr } from '@aqire/common/src/lang/string';
   import { addVNodeListener, callVNodeListener } from '../util/VNode';
   import AqireChild from '../dynamic/AqireChild';

   export default {
      name       : 'AqireInput',
      components : { AqireChild },
      props      : {
         // 类型
         type      : String,
         // 去除两边的空格
         trim      : Boolean,
         // 使用change事件替换input事件
         lazy      : Boolean,
         // 禁用
         disabled  : Boolean,
         // 只读
         readonly  : Boolean,
         // 清除
         cleanable : Boolean,
         // 格式化
         format    : {
            type    : Function,
            default : v => v
         }
      },
      model      : {
         prop  : 'value',
         event : 'update:value'
      },
      computed   : {
         // 控件类型
         inputType() {
            const type = this.type;
            return isBlank( this.type ) ? 'text' : type;
         },
         // 标签名称
         isTextarea() {
            return this.inputType === 'textarea';
         },
         // 原生类型
         nativeType() {
            const inputType = this.inputType;
            return inputType === 'password'
                ? inputType : (
                    inputType !== 'textarea' && 'text'
                );
         },
         // class
         className() {
            return `aqire-input-${this.inputType}`;
         },
         //
         needWrap() {
            return this.isTextarea
                || this.cleanable;
         },
         // 格式化处理器
         handleFormat() {
            return !this.trim ? this.format : value => this.format( trimStr( value ) );
         },
         // 输入事件
         inputEvent() {
            return this.lazy ? 'change' : 'input';
         },
         // 绑定事件
         listeners() {
            const { inputEvent, handleInput, $listeners, handleCompositionStart, handleCompositionEnd } = this;
            const listeners = { ...$listeners };
            addVNodeListener( true, listeners, inputEvent, handleInput );
            addVNodeListener( true, listeners, 'compositionstart', handleCompositionStart );
            addVNodeListener( true, listeners, 'compositionend', handleCompositionEnd );
            return listeners;
         }
      },
      methods    : {
         // 输入事件处理器
         handleInput( event ) {
            if ( this.isComposing ) {
               return;
            }
            this.$emit(
                'update:value',
                event.target.value = this.handleFormat( event.target.value )
            );
         },
         // 输入法启动
         handleCompositionStart() {
            this.isComposing = true;
         },
         // 输入法结束
         handleCompositionEnd( event ) {
            if ( this.isComposing ) {
               const { listeners, inputEvent } = this;
               this.isComposing = false;
               callVNodeListener( listeners, inputEvent, this, event );
            }
         }
      }
   };
</script>
