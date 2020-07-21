<template>
    <div v-if="eq(1)">
        <div></div>
    </div>
</template>

<script lang="js">
   import ExampleMixin from '../../mixins/ExampleMixin';

   export default {
      name   : 'checkbox',
      mixins : [ExampleMixin]
   };
</script>

<style scoped lang="scss">
    

</style>
