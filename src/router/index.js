import Vue from 'vue'
import VueRouter from 'vue-router'

//登录页面
let login = () => import('@/views/login.vue');
let main = () => import('@/views/main.vue')
//424页面
let _404 = () => import('@/views/default/404.vue');

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'login',
        redirect: "/login"
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/main',
        name: 'main',
        component:main
    },
    {
        path: '*',
        name: '_404',
        component:_404
    }
]

const router = new VueRouter({
    routes
})

export default router
