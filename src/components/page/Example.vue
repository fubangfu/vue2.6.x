<script lang="jsx">
   import exampleComponents from '../../example';

   export default {
      name    : 'Example',
      methods : {
         renderEmpty() {
            return <div class="example-tip">{
               '请在 example 目录下新建与当前 md 文件同层级的 vue示例组件。方可展示示例。'
            }</div>;
         }
      },
      render( c ) {
         const { $parent, renderEmpty } = this;
         const component = exampleComponents[$parent.$route.path];
         return component ? c( component, {
            staticClass : 'demo-block',
            attrs       : this.$attrs,
            scopedSlots : this.$scopedSlots
         } ) : renderEmpty();
      }
   };
</script>
<style lang="scss" scoped>
    div.example-tip {
        font-size: 12px;
        color: red;
        border: 1px solid red;
        display: inline-block;
        padding: 4px;
    }
</style>
