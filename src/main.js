import App from './App.vue'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify();

new Vue({
    vuetify,
    render: h => h(App),
}).$mount('#app');
