import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.scss';
import 'highlight.js/styles/color-brewer.css';

Vue.config.productionTip = false;

new Vue( {
   router,
   store,
   render : h => h( App )
} ).$mount( '#app' );
