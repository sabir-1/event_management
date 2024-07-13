
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home.vue'
import EventRegister from "@/pages/eventRegister.vue"
import EventConfirm from "@/pages/eventConfirmation.vue"
import AllUser from "@/pages/allUser.vue"
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/event-register',
        name: 'EventRegister',
        component: EventRegister,
    },
    {
        path: '/confirm',
        name: 'EventConfirm',
        component: EventConfirm,
    },
    {
        path: '/all-users',
        name: 'AllUser',
        component: AllUser,
    },
]
const router: any = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
