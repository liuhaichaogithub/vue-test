import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        component: () => import('@/components/Home') //路由懒加载
        // component: resolve => require(['@/components/HelloWorld'],resolve) //异步加载
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/components/Login') //路由懒加载
    }
    ,
    {
        path: '/',
        redirect: '/login',
        component: () => import('@/components/Login') //路由懒加载
    }
    ,
    {
        path: '*',
        name: 'NotFound',
        component: () => import('@/components/NotFound') //路由懒加载
    }
    ],
    mode: 'history'

})