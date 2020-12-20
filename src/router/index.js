import Vue from 'vue'
import VueRouter from 'vue-router'

let login = () => import('@/views/login.vue');

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
    }
]

const router = new VueRouter({
    routes
})

export default router
