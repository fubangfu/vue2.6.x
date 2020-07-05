<template>
    <div class="code-page">
        <router-view/>
    </div>
</template>

<script lang="js">
   import Vue from 'vue';
   import PageWarn from './TipWarn';
   import Example from './Example';

   Vue.component( PageWarn.name, PageWarn );
   Vue.component( Example.name, Example );

   export default {
      name : 'PageBody'
   };
</script>

<style lang="scss">
    @import "../../assets/css/mixins";

    .code-page {
        section {
            font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
            /*font-family: "Microsoft YaHei", sans-serif;*/
            position: relative;
            margin: 0 auto;
            padding: 20px !important;
            font-size: 16px;

            .demo-block {
                /*display: none;*/
                position: relative;
                border: 1px solid #f8f8f8;
                border-radius: 2px;
                padding: 25px 35px;
                margin-top: 1em;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                overflow-x: auto;

                &:before {
                    position: absolute;
                    top: 0;
                    right: 0;
                    color: #ccc;
                    text-align: right;
                    font-size: 0.75em;
                    padding: 5px 10px 0;
                    line-height: 15px;
                    height: 15px;
                    font-weight: 400;
                    content: '示例';
                }
            }

            code.code_inline {
                color: #e96900;
                padding: 3px 5px;
                margin: 0 2px;
                border-radius: 2px;
                white-space: nowrap;
                font-family: "Roboto Mono", Monaco, courier, monospace;
                font-size: 0.8em;
                background-color: #f8f8f8;
                -webkit-font-smoothing: initial;
            }

            a {
                color: #40a9ff;
                font-weight: 600;
            }

            p, ul, ol {
                line-height: 2em;
                margin: 0.5em 0;
                position: relative;
                z-index: 1;
            }

            h1, h2, h3 {
                font-weight: 600;
                color: #2c3e50;
                font-size: 2em;
            }

            h2 {
                margin-top: 20px;
                font-size: 1.5em;
            }

            h3 {
                margin-top: 40px;
                font-size: 1.17em;
            }

            h4 {
                color: #2c3e50;
                font-weight: 600;
                margin-top: 20px;
            }

            ul, ol {
                line-height: 1.6em;
                padding-bottom: 1.2em;
                position: relative;
                z-index: 1;
                padding-left: 1.5em;
            }

            blockquote {
                margin: 2em 0;
                padding-left: 20px;
                border-left: 4px solid $color-primary;
                background-color: #f8f8f8;

                p {
                    font-weight: 400;
                    margin-left: 0;
                    margin-bottom: 0;
                    padding-bottom: 0;
                    line-height: 2em;
                }
            }

            .tip-warn {
                margin: 2em 0;
                padding: 12px 24px;
                border-left-width: 4px;
                border-left-style: solid;
                background-color: #f8f8f8;
                position: relative;
                border-bottom-right-radius: 2px;
                border-top-right-radius: 2px;
                font-size: 14px;
                line-height: 22px;
                border-left-color: #f66;

                &:before {
                    position: absolute;
                    top: 10px;
                    left: -12px;
                    color: #fff;
                    width: 20px;
                    height: 20px;
                    border-radius: 100%;
                    text-align: center;
                    line-height: 20px;
                    font-weight: bold;
                    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
                    font-size: 14px;
                }

                &:before {
                    content: "!";
                    background-color: #f66;
                }
            }

            p, li {
                font-size: 14px;
                color: #2c3e50;
            }

            .highlight, .demo-block {
                padding: 20px 20px;
            }

            .table {
                border-collapse: collapse;
                width: 100%;
                background-color: #fff;
                font-size: 14px;
                margin-bottom: 45px;
                line-height: 1.5em;

                th:first-child {
                    padding-left: 10px;
                }

                td {
                    color: #333;
                }

                th, td {
                    border-bottom: 1px solid #d8d8d8;
                    padding: 15px;
                    max-width: 250px;
                }
            }
        }

        pre {
            overflow-x: auto;
            background-color: #f8f8f8;
            line-height: 1.1em;
            border-radius: 2px;
            position: relative;
            margin: 1.2em 0;
            padding: 20px;

            code, span {
                font-family: "Roboto Mono", Monaco, courier, monospace;
                font-size: 0.8em;
                letter-spacing: 0.1em;
            }

            code {
                line-height: 1.6em;

                &:before {
                    position: absolute;
                    top: 0;
                    right: 0;
                    color: #ccc;
                    text-align: right;
                    font-size: 0.75em;
                    padding: 5px 10px 0;
                    line-height: 15px;
                    height: 15px;
                    font-weight: 400;
                }

                &.language-js:before {
                    content: 'JS';
                }

                &.language-html:before, &.language-xml:before {
                    content: 'HTML';
                }

                &.language-css:before {
                    content: 'CSS';
                }

                &.language-md:before {
                    content: 'MD';
                }

                &.language-bash:before {
                    content: 'BASH';
                }


                .hljs-tag {
                    color: #2973b7;
                }

                /*.hljs-built_in,*/
                .hljs-string {
                    color: #42b983;
                }

                .hljs-tag {
                    min-height: 1.5em;
                }

                .hljs-comment {
                    color: #b3b3b3;
                }

                .hljs-keyword {
                    color: #e96900;
                }

                .hljs-literal, .hljs-number {
                    color: #ae81ff;
                }

                .hljs-selector-class, .hljs-selector-tag {
                    /*color: #2c3e50;*/
                }

            }
        }
    }
</style>
