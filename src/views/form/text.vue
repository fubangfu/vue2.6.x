<template>
    <div v-if="eq('first')">
        <aqire-input
                type="text"
                maxlength="5"
                v-model="text"
                placeholder="请输入内容"/>
        <div>input: {{text}}</div>
    </div>
</template>

<script>
   import ExampleMixin from '../../mixins/ExampleMixin';
   import AqireInput from '../../packages/input/AqireInput';

   export default {
      name       : 'textt',
      components : { AqireInput },
      mixins     : [ExampleMixin],
      data() {
         return {
            text : 'v-model绑定值'
         };
      }
   };
</script>

<style scoped>

</style>
