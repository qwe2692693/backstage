import Vue from 'vue'
import VueRouter from 'vue-router'

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
        component: () => import('@/views/login.vue')
    },
    {
        path: '/main',
        name: 'main',
        component:() => import('@/views/main.vue')
    },
    {
        path: '*',
        name: '_404',
        component:() => import('@/views/default/404.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
