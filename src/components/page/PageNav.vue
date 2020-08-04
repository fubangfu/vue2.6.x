<template>
    <div class="aqire-app-sidebar">
        <div class="aqire-app-nav">
            <ul class="aqire-app-nav__root">
                <li :key="i"
                    class="aqire-app-nav__root-li"
                    v-for="(root, i) in list">
                    <h3 class="aqire-app-nav__root-title">{{ root.title }}</h3>
                    <ul class="aqire-app-nav__sec"
                        v-if="root.children && root.children.length">
                        <li v-for="(sub, ii) in root.children" :key="ii">
                            <a class="aqire-app-nav__link"
                               v-html="sub.title"
                               :class="{
                                   'aqire-app-nav__link--current' : isCurrentPath(sub)
                               }"
                               @click.prevent="linkClick(sub)"></a>
                            <ul class="aqire-app-nav__ul" v-if="sub.children && sub.children.length">
                                <li v-for="(sc, ii) in sub.children" :key="ii">
                                    <a class="aqire-app-nav__link"
                                       v-html="sc.title"
                                       :class="{
                                          'aqire-app-nav__link--current' : isCurrentPath(sc)
                                       }"></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="js">
export default {
    name     : 'PageNav',
    computed : {
        list() {
            return this.sort( this.__pages__ || [] );
        }
    },
    methods  : {

        sort( list ) {
            return list.sort( ( a, b ) => a.order < b.order ? -1 : a.order > b.order ? 1 : 0 );
        },

        linkClick( page ) {
            if ( this.$route.fullPath !== page.path ) {
                this.$router.push( page.path );
            }
        },

        isCurrentPath( page ) {
            return this.$route.fullPath === page.path;
        }
    }
};
</script>

<style scoped lang="scss">

@import "../../assets/css/app";

@include b(app-sidebar) {
    @include reset;
    position: fixed;
    @include topLeft(61px);
    bottom: 0;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    z-index: 1;
}

@include b(app-nav) {
    padding: 20px 0;

    @include e((ul, root, sec)) {
        @include reset;
        line-height: 21px;
        font-size: $font-base-size;
    }

    // 主导航
    @include e(root) {
        padding-left: 0;
    }

    @include e(root-li) {
        margin-top: $font-base-size;
    }

    @include e(root-title) {
        font-weight: 600;
        color: $font-base-color;
        padding-left: $font-base-size;
    }

    // 次级导航
    @include e(sec) {
        margin-top: 10px;

        li {
            padding-left: $font-base-size * 2;
            font-size: $font-size-middle;
            line-height: $font-base-size * 2;
            @include transition((background-color, color));

            @include pseudo(hover) {
                background-color: rgba(62, 175, 124, 0.1);
                color: $color-primary;
            }
        }
    }

    @include e(link) {
        display: block;
        @include transition(color);

        @include m(current) {
            font-weight: 600;
            color: $color-primary;
        }

        @include pseudo(hover) {
            color: $color-primary;
            cursor: pointer;
        }
    }

}

</style>
