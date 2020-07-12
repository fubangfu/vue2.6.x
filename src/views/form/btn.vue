<template>
    <div v-if="eq(1)">示例1</div>
    <div v-else-if="eq(2)">示例2</div>
</template>

<script>
   import ExampleMixin from '../../mixins/ExampleMixin';

   export default {
      name   : 'btn',
      mixins : [ExampleMixin]
   };
</script>
