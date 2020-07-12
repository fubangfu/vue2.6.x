<template>
    <div v-if="eq(1)">111</div>
    <div v-else-if="eq(2)">222</div>
</template>

<script>
   import ExampleMixin from '../mixins/ExampleMixin';

   export default {
      name   : 'overview',
      mixins : [ExampleMixin]
   };
</script>
