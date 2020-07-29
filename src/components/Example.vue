<script lang="jsx">
export default {
  name     : 'Example',
  data() {
    return {
      show : false
    };
  },
  computed : {
    label() {
      return this.show ? '隐藏代码' : '显示代码';
    }
  },
  methods  : {
    toggleShow() {
      this.show = !this.show;
    }
  },
  render() {
    // 示例内容
    const defaultSlot = this.$scopedSlots.default;
    // 示例代码展示
    const parent = this.$parent;
    const exampleSlot = parent.$scopedSlots.default;

    return (
        <div class="example-wrap">
          <div class="example-demo">{defaultSlot && defaultSlot()}</div>
          <div class="example-code" v-show={this.show}>{exampleSlot && exampleSlot()}</div>
          <div class="example-open" v-on:click={this.toggleShow}>
            <span>{this.label}</span>
          </div>
        </div>
    );
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
  }

  &:hover {
    .example-open {
      span {
        color: inherit;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

}

</style>
