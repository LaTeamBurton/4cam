import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage  from '@/views/HomePage.vue'
import List  from '@/views/List.vue'

Vue.use(VueRouter)
const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'List',
        path: '/list',
        component: () => import ('@/views/List.vue')
    },
    {
        name: 'Profile',
        path: '/profile/:id',
        component: List
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router