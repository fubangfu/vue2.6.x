<script>
   /**
    * 动态组件
    * 注意：在当前组件上添加is属性时，VUE将不会渲染此组件。
    *       不添加is属性时，则渲染此组件，而当前组件的目的则是返回所有子节点
    */
   export default {
      name         : 'AqireDynamic',
      functional   : true,
      inheritAttrs : false,
      render( c, context ) {
         return context.children;
      }
   };
</script>

<style scoped>

</style>
