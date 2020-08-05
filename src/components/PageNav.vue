<template>
    <div :class="css.nav">
        <div :class="css.body">
            <ul :class="css.root">
                <li :key="i"
                    :class="css.rootLi"
                    v-for="(root, i) in list">
                    <h3 :class="css.rootTitle">{{ root.title }}</h3>
                    <ul :class="css.sec"
                        v-if="root.children && root.children.length">
                        <li v-for="(sub, ii) in root.children" :key="ii">
                            <a :class="css('link',{current : isCurrentPath(sub)})"
                               v-html="sub.title"
                               @click.prevent="linkClick(sub)"></a>
                            <ul :class="css.ul"
                                v-if="sub.children && sub.children.length">
                                <li v-for="(sc, ii) in sub.children"
                                    :key="ii">
                                    <a v-html="sc.title"
                                       :class="css('link',{current : isCurrentPath(sc)})"></a>
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

import helper from '../css/helper';
import { mix } from '@aqire/common/src/lang/object';

const bem = helper( 'nav' );

export default {
    name     : 'PageNav',
    computed : {
        list() {
            return this.sort( this.__pages__ || [] );
        },
        css() {
            return mix( bem, {
                nav       : bem(),
                body      : bem( 'body' ),
                ul        : bem( 'ul' ),
                root      : bem( 'root' ),
                rootLi    : bem( 'root-li' ),
                rootTitle : bem( 'root-title' ),
                sec       : bem( 'sec' )
            } );
        }
    },
    methods  : {
        // 排序
        sort( list ) {
            return list.sort( ( a, b ) => a.order < b.order ? -1 : a.order > b.order ? 1 : 0 );
        },
        // 点击
        linkClick( page ) {
            if ( this.$route.fullPath !== page.path ) {
                this.$router.push( page.path );
            }
        },
        // 当前路由
        isCurrentPath( page ) {
            return this.$route.fullPath === page.path;
        }
    }
};
</script>

<style scoped lang="scss">

@import "../assets/css/app";

@include b(nav) {
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

    @include e(body) {
        padding: 20px 0;
    }

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
