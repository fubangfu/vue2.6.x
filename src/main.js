import Vue from 'vue';
import App from './App.vue';
import { pages, router } from './router';
import './assets/css/reset.scss';
import 'highlight.js/styles/color-brewer.css';
import './packages/theme/index.scss';

Vue.config.productionTip = false;

new Vue( {
   data() {
      return {
         pages
      };
   },
   router,
   render : h => h( App )
} ).$mount( '#app' );
