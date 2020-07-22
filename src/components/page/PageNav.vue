<template>
    <div class="sidebar">
        <div class="nav-page">
            <ul class="menu-root">
                <li v-for="(root, i) in list" :key="i">
                    <h3>{{root.title}}</h3>
                    <ul class="menu-sub" v-if="root.children && root.children.length">
                        <li v-for="(sub, ii) in root.children" :key="ii">
                            <a class="sidebar-link"
                               :class="{ current : isCurrentPath(sub) }"
                               @click.stop.prevent="linkClick(sub)">{{sub.title}}</a>
                            <ul v-if="sub.children && sub.children.length">
                                <li v-for="(sc, ii) in sub.children" :key="ii">
                                    <a class="sidebar-link" :class="isCurrentPath(sc)">{{sc.title}}</a>
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

    .sidebar {
        font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
        position: fixed;
        z-index: 1;
        top: 61px;
        left: 0;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);

        .nav-page {
            padding: 20px 0;

            ul {
                list-style-type: none;
                margin: 0;
                line-height: 21px;
                font-size: $font-base-size;
            }

            .menu-root {
                padding-left: 0;

                & > li {
                    margin-top: $font-base-size;

                    h3 {
                        font-weight: 600;
                        color: $font-base-color;
                        padding-left: $font-base-size;
                    }

                    .menu-sub {
                        margin-top: 10px;

                        & li {
                            padding-left: $font-base-size * 2;
                            font-size: $font-size-middle;
                            line-height: $font-base-size * 2;
                            @include transition((background-color, color));

                            &:hover {
                                background-color: rgba(62, 175, 124, 0.1);
                                color: $color-primary;
                            }

                        }
                    }

                    a.sidebar-link {
                        display: block;
                        @include transition(color);

                        &:hover {
                            color: $color-primary;
                            cursor: pointer;
                        }

                        &.current {
                            font-weight: 600;
                            color: $color-primary;
                        }
                    }
                }
            }


        }
    }

</style>
