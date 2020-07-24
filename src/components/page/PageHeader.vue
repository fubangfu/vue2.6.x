<template>
    <div class="page-header">
        <img alt="logo"
             class="page-header-logo"
             @click="onClick"
             src="../../assets/logo.png">
        <h1>{{name}} UI <span v-html="version"></span></h1>
    </div>
</template>

<script lang="js">
   export default {
      name    : 'PageHeader',
      data() {
         return {
            name    : process.env.VUE_APP__NAMESPACE__,
            version : process.env.VUE_APP__VERSION__
         };
      },
      methods : {
         onClick() {
            this.$router.replace( '/' );
         }
      }
   };
</script>

<style scoped lang="scss">

    @import "../../assets/css/app";

    .page-header {
        height: 60px;
        padding: 10px 20px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
        background: #fff;
        @include transition(background-color);

        h1 {
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

        &-logo {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            display: inline-block;
            margin-left: $font-base-size;

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>
