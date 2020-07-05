<template>
    <div class="page-header">
        <img alt="logo"
             class="page-header-logo"
             @click="onClick"
             src="../../assets/logo.png">
        <h1>Aqire UI <span v-html="version"></span></h1>
    </div>
</template>

<script lang="js">
   export default {
      name    : 'PageHeader',
      data() {
         return {
            version : process.env.VUE_APP_VERSION
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

    @import "../../assets/css/mixins";

    .page-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
        padding: 10px 20px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
        transition: background-color 0.3s $bezier-ease-in-out;
        z-index: 11;
        background: #fff;

        h1 {
            display: inline-block;
            font-size: 20px;
            font-weight: 800;
            padding-left: 20px;
            vertical-align: middle;
            margin: 0;
            color: $color-primary;

            span {
                color: #34495e;
                font-size: 14px;
            }
        }

        &-logo {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            display: inline-block;
            margin-left: 1em;

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>
