<template>
    <div class="code-page">
        <router-view/>
    </div>
</template>

<script lang="js">

export default {
    name : 'PageBody'
};
</script>

<style lang="scss">
@import "../assets/css/app";

.code-page {
    section {
        font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
        position: relative;
        margin: 0 auto;
        padding: 20px !important;
        font-size: $font-size-middle;

        code.code_inline {
            color: #e96900;
            padding: 3px 5px;
            margin: 0 2px;
            border-radius: 2px;
            white-space: nowrap;
            font-family: "Roboto Mono", Monaco, courier, monospace;
            font-size: $font-size-middle * 0.8;
            background-color: #f8f8f8;
            -webkit-font-smoothing: initial;
        }

        a {
            color: #40a9ff;
            font-weight: 600;
        }

        p, ul, ol {
            line-height: $font-size-middle*2;
            margin: $font-size-middle/2 0;
            position: relative;
            z-index: 1;
        }

        h1, h2, h3 {
            font-weight: 600;
            color: #2c3e50;
            font-size: $font-size-middle*2;
        }

        h2 {
            margin-top: 20px;
            font-size: $font-size-middle*1.6;
        }

        h3 {
            margin-top: 40px;
            font-size: $font-size-middle*1.2;
        }

        h4 {
            color: #2c3e50;
            font-weight: 600;
            margin-top: 20px;
        }

        ul, ol {
            line-height: $font-size-middle*1.6;
            padding-bottom: $font-size-middle*1.2;
            position: relative;
            z-index: 1;
            padding-left: $font-size-middle*1.5;
        }

        blockquote {
            margin: $font-size-middle*2 0;
            /**/
            background-color: #f8f8f8;

            p {
                padding: 10px 0 10px 20px;
                border-left: 4px solid $color-primary;
                font-weight: 400;
                margin-left: 0;
                margin-bottom: 0;
                line-height: $font-size-middle*2;
            }

            & > blockquote {
                position: relative;

                &:before {
                    position: absolute;
                    @include topLeft(10px, -8px);
                    color: #fff;
                    width: 20px;
                    height: 20px;
                    border-radius: 100%;
                    text-align: center;
                    line-height: 20px;
                    font-weight: bold;
                    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
                    font-size: 14px;
                    content: "!";
                    background-color: #f66;
                    z-index: 2;
                }

                p {
                    border-left-color: #f66;
                }
            }
        }

        p, li {
            font-size: 16px;
            color: #2c3e50;
        }

        .highlight, .demo-block {
            padding: 20px 20px;
        }

        .table {
            border-collapse: collapse;
            width: 100%;
            background-color: #fff;
            font-size: 16px;
            margin-bottom: 45px;
            line-height: $font-size-middle*1.5;

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
        line-height: $font-size-middle*1.1;
        border-radius: 2px;
        position: relative;
        margin: $font-size-middle * 1.2 0;
        padding: 20px;

        code, span {
            font-family: "Roboto Mono", Monaco, courier, monospace;
            font-size: $font-base-size;
            /*letter-spacing: 0.1em;*/
        }

        code {
            line-height: $font-base-size * 1.8;

            &:before {
                position: absolute;
                top: 0;
                right: 0;
                color: #ccc;
                text-align: right;
                font-size: $font-base-size * 0.75;
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
                min-height: $font-base-size*1.5;
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
