import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/reset.scss';
import 'highlight.js/styles/color-brewer.css';
import '../index';

Vue.config.productionTip = false;

new Vue( {
   router,
   render : h => h( App )
} ).$mount( '#app' );
