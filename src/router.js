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
            path: '/auth/:type',
            name: 'auth',
            component: () => import( /* webpackChunkName: "auth" */ './pages/Auth.vue')
        },
        {
            path: '/message/:type',
            name: 'newmessage',
            component: () => import( /* webpackChunkName: "newmessage" */ './pages/Create-Message.vue')
        },
        {
            path: '/message/:id',
            name: 'message',
            component: () => import( /* webpackChunkName: "message" */ './pages/Message.vue')
        }
    ]
})
