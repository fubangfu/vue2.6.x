<script>
   /**
    * 返回此组件下的所有子节点
    */
   export default {
      name         : 'AqireChild',
      functional   : true,
      inheritAttrs : false,
      render( c, context ) {
         return context.children;
      }
   };
</script>

<style scoped>

</style>
