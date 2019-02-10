
import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'

import 'vue-material/dist/vue-material.css'



Vue.use(VueRouter)

Vue.use(VueMaterial)

import Signin from './components/Signin.vue'

const routes = [
    { path: '/', component: Signin }
];

const router = new VueRouter({
    routes
  })


new Vue({
    el: '#app',
    router,
    render: h => h(App)
});