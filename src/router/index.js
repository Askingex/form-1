import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import diagnostico from '../views/Diagnostico.vue'
import Caracterizacion from '../views/Caracterizacion.vue'
import grafico from '../views/Grafico.vue'
import login from '../views/login.vue'
import ho from '../views/Ho.vue'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/caracterizacion',
        name: 'Caracterizacion',
        component: Caracterizacion
    },
    {
        path: '/diagnostico',
        name: 'diagnostico',
        component: diagnostico
    },
    {
        path: '/grafico',
        name: 'grafico',
        component: grafico
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/ho',
        name: 'ho',
        component: ho
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
import { db } from "../Db";
router.beforeEach((to, from, next) => {
    if (db.user && to.path != '/login') {
        next({ name: 'login' })
    } else {
        next();
    }
})

export default router