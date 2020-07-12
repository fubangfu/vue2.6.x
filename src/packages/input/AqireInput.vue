<template>
    <input :type="nativeType"
           v-bind="$attrs"
           v-on="listeners"
           class="aqire-input">
</template>

<script>
   import { isBlank, isFunc } from '@aqire/common/src/type';
   import createConfig from '../config';
   import { trimStr } from '@aqire/common/src/lang/string';
   import { addVNodeListener, callVNodeListener } from '../util/VNode';

   // 默认配置
   const DEFAULT_CONFIG = {
      type : {
         number() {

         },
         text( value ) {
            return value;
         }
      }
   };

   // 配置
   const { CONFIG, configs } = createConfig( 'AqireInput', DEFAULT_CONFIG );

   export default {
      name     : 'AqireInput',
      configs,
      props    : {
         // 类型
         type     : String,
         // 去除两边的空格
         trim     : Boolean,
         // 使用change事件替换input事件
         lazy     : Boolean,
         // 禁用
         disabled : Boolean,
         // 只读
         readonly : Boolean
      },
      model    : {
         prop  : 'value',
         event : 'update:value'
      },
      computed : {
         // 控件类型
         inputType() {
            const type = this.type;
            return isBlank( this.type ) ? 'text' : type;
         },
         // 原生类型
         nativeType() {
            const inputType = this.inputType;
            return inputType === 'text'
            || inputType === 'textarea'
                ? inputType : 'text';
         },
         // class
         className() {
            return `aqire-input-${this.inputType}`;
         },
         // 类型输入处理器
         typeHandler() {
            const { inputType, trim } = this;
            const handle = CONFIG.type[inputType] || DEFAULT_CONFIG.type[inputType];
            const handler = isFunc( handle ) ? handle : DEFAULT_CONFIG.type.text;
            return function ( value ) {
               return handler( trim ? trimStr( value ) : value );
            };
         },
         // 输入事件
         inputEvent() {
            return this.lazy ? 'change' : 'input';
         },
         // 绑定事件
         listeners() {
            const { inputEvent, inputHandler, $listeners } = this;
            const listeners = { ...$listeners };
            addVNodeListener( true, listeners, inputEvent, inputHandler );
            return listeners;
         }
      },
      methods  : {
         // 输入事件处理器
         inputHandler( event ) {
            if ( this.isComposing ) return;
            const typeHandler = this.typeHandler;
            event.target.value = typeHandler( event.target.value );
            this.$emit( 'update:value', event.target.value );
         },
         // 输入法启动
         compositionStartHandler() {
            this.isComposing = true;
         },
         // 输入法结束
         compositionEndHandler( event ) {
            if ( this.isComposing ) {
               const { listeners, inputEvent } = this;
               this.isComposing = false;
               callVNodeListener( listeners, inputEvent, this, event );
            }
         }
      }
   };
</script>

<style scoped lang="scss">
    .aqire-input {

    }
</style>
