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

    @import "../../assets/css/mixins";

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
            width: 260px;
            padding: 20px 0;

            ul {
                list-style-type: none;
                margin: 0;
                line-height: 1.5em;
                font-size: 1em;
            }

            .menu-root {
                padding-left: 0;

                & > li {
                    margin-top: 1em;

                    h3 {
                        font-weight: 600;
                        color: #2c3e50;
                        padding-left: 1em;
                    }

                    .menu-sub {
                        margin-top: .85em;

                        & li {
                            padding-left: 2em;
                            font-size: 16px;
                            line-height: 1.5em;
                            transition: background-color .2s $bezier-ease-in-out;

                            &:hover {
                                background-color: rgba(62, 175, 124, 0.1);
                                color: $color-primary;
                            }

                        }
                    }

                    a.sidebar-link {
                        transition: color .3s $bezier-ease-out;
                        display: block;

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
