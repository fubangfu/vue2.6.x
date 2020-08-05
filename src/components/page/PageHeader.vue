<template>
    <div :class="css.header">
        <img alt="logo"
             :class="css.logo"
             @click="onClick"
             src="../../assets/logo.png">
        <h1 :class="css.title">{{ name }} UI <span v-html="version"></span></h1>
    </div>
</template>

<script lang="js">
import helper from '../../css/helper';

const bem = helper( 'header' );

export default {
    name     : 'PageHeader',
    data() {
        return {
            name    : __NAMESPACE__,
            version : __VERSION__
        };
    },
    computed : {
        css() {

            return {
                header : bem(),
                logo   : bem( 'logo' ),
                title  : bem( 'title' )
            };
        }
    },
    methods  : {
        onClick() {
            this.$router.replace( '/' );
        }
    }
};
</script>

<style scoped lang="scss">

@import "../../assets/css/app";

@include b(header) {
    height: 60px;
    padding: 10px 20px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    background: #fff;
    @include transition(background-color);

    @include e(title) {
        display: inline-block;
        font-size: 20px;
        font-weight: 800;
        padding-left: 20px;
        vertical-align: middle;
        margin: 0;
        color: $color-primary;

        span {
            color: $font-base-color;
            font-size: $font-base-size;
        }
    }


    @include e(logo) {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        display: inline-block;
        margin-left: $font-base-size;

        @include pseudo(hover) {
            cursor: pointer;
        }
    }
}
</style>
