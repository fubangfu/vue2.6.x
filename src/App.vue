<template>
    <div id="app">
        <page-header/>
        <page-nav class="page-nav"/>
        <page-body class="page-body"/>
    </div>
</template>

<style lang="scss">
    @import "assets/css/mixins";

    #app {
        padding: 20px;
        height: 100%;
    }

    .page-body {
        position: relative;
        padding: 50px 0 0 260px;
        height: 100%;
        color: #34495e;
    }

    @include media-max-959() {
        .page-nav {
            width: 200px;
        }
        .page-body {
            padding-left: 200px;
        }
    }
</style>
<script>
   import PageHeader from './components/page/PageHeader';
   import PageNav from './components/page/PageNav';
   import PageBody from './components/page/PageBody';

   export default {
      components : { PageBody, PageNav, PageHeader }
   };
</script>
