<template>
    <div id="app">
        <page-header class="page-header"/>
        <page-nav class="page-nav"/>
        <page-body class="page-body"/>
    </div>
</template>

<style lang="scss">
@import "assets/css/app";
@import "css/global";

#app {
    padding: 20px;
    height: 100%;
}

.page-header {
    position: fixed;
    @include topLeft(0);
    width: 100%;
    z-index: 11;
}

.page-nav {
    width: 260px;
}

.page-body {
    position: relative;
    padding: 50px 0 0 260px;
    height: 100%;
    color: $font-base-color;
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
    components : {
        PageBody,
        PageNav,
        PageHeader
    }
};
</script>
