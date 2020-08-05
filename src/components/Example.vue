<script lang="jsx">
import helper from '../css/helper';

const bem = helper( 'example' );
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
        },
        css() {
            return {
                example : bem(),
                demo    : bem( 'demo' ),
                code    : bem( 'code' ),
                open    : bem( 'open' )
            };
        }
    },
    methods  : {
        toggleShow() {
            this.show = !this.show;
        }
    },
    render() {
        const { css, $scopedSlots, $parent } = this;
        // 示例内容
        const defaultSlot = $scopedSlots.default;
        // 示例代码展示
        const exampleSlot = $parent.$scopedSlots.default;

        return (
            <div class={css.example}>
                <div class={css.demo}>{defaultSlot && defaultSlot()}</div>
                <div class={css.code} v-show={this.show}>{exampleSlot && exampleSlot()}</div>
                <div class={css.open} v-on:click={this.toggleShow}>
                    <span>{this.label}</span>
                </div>
            </div>
        );
    }
};
</script>
<style lang="scss" scoped>

@import "../assets/css/app";

@include b(example) {
    border: 1px solid #ebebeb;
    border-radius: 2px;
    @include transition(box-shadow);

    // :hover
    @include pseudo(hover) {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    }

    // 示例代码
    @include e(demo) {
        position: relative;
        padding: 25px 35px;
        margin-top: $font-base-size;
        overflow-x: auto;
        // :before
        @include pseudo(before) {
            position: absolute;
            @include topRight();
            color: #ccc;
            text-align: right;
            font-size: $font-base-size * .75;
            padding: 5px 10px 0;
            line-height: 15px;
            height: 15px;
            font-weight: 400;
            content: '示例';
        }
    }

    // 代码展示
    @include e((code, open)) {
        border-top: inherit;
    }

    // 代码展示/隐藏
    @include e(open) {
        text-align: center;

        span {
            display: block;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            color: #d3dce6;
            @include transitionColor;
        }

        // hover
        @include pseudo(hover) {
            cursor: pointer;

            span {
                color: inherit;
            }
        }
    }

}

</style>
