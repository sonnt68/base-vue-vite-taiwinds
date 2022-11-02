import { createRouter, createWebHistory } from 'vue-router'

import Topup from '@/components/Topup.vue'

const routes = [
    {
        path: '/',
        component: Topup
    },
    {
        path: '/topup',
        component: Topup
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router