import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import( /* webpackChunkName: "home" */ './pages/Home.vue')
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import( /* webpackChunkName: "auth" */ './pages/Auth.vue')
        }
    ]
})
