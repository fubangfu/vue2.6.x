<script lang="jsx">
   import exampleComponents from '../example';

   export default {
      name    : 'Example',
      props   : {
         name : String
      },
      data() {
         return {
            show : false
         };
      },
      methods : {
         // 渲染空组件
         renderEmpty( c ) {
            return (c(
                'div', {
                   staticClass : 'example-empty'
                }, ['请在 example 目录下新建与当前 MD文件同层级的 Vue示例组件']
            ));
         },
         toggleShow() {
            this.show = !this.show;
         }
      },
      render( c ) {
         const children = [];
         const example = exampleComponents[this.$parent.$route.path];
         // 获取example目录下定义的示例组件
         // 是否有对应的示例组件
         if ( example ) {
            children.push( c( example, { attrs : { name : this.name } } ) );
            // 如果没有渲染空白提示内容
         } else {
            children.push( this.renderEmpty( c ) );
         }

         const defaultSlot = this.$scopedSlots.default;
         return (<div class="example-wrap">
            <div class="example-demo">{children}</div>
            <div class="example-code" v-show={this.show}>{defaultSlot && defaultSlot()}</div>
            <div class="example-open" v-on:click={this.toggleShow}>
               <span>{this.show ? '隐藏代码' : '显示代码'}</span>
            </div>
         </div>);
      }
   };
</script>
<style lang="scss" scoped>

    .example-wrap {
        border: 1px solid #ebebeb;
        border-radius: 2px;

        &:hover {
            box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
        }

        & > .example-demo {
            /*display: none;*/
            position: relative;
            padding: 25px 35px;
            margin-top: 1em;
            overflow-x: auto;

            &:before {
                position: absolute;
                top: 0;
                right: 0;
                color: #ccc;
                text-align: right;
                font-size: 0.75em;
                padding: 5px 10px 0;
                line-height: 15px;
                height: 15px;
                font-weight: 400;
                content: '示例';
            }

        }

        & > .example-code,
        & > .example-open {
            border-top: inherit;
        }

        & > .example-code {
            & > p {
                padding-left: 25px;
            }
        }

        & > .example-open {
            text-align: center;

            & span {
                display: block;
                height: 32px;
                line-height: 32px;
                font-size: 14px;
                color: #d3dce6;
            }

            &:hover {
                cursor: pointer;

                span {
                    color: inherit;
                }
            }
        }

    }

</style>
