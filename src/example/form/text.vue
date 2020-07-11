<template>
    <div v-if="eq('first')">
        <input type="text" placeholder="请输入内容">
    </div>
</template>

<script>
   import ExampleMixin from '../../mixins/ExampleMixin';

   export default {
      name   : 'textt',
      mixins : [ExampleMixin]
   };
</script>

<style scoped>

</style>
