import Vue from 'vue' //引入 Vue
import VueRouter from 'vue-router' //引入 Vue 路由

Vue.use(VueRouter); //安装插件

export const constantRouterMap = [
    //配置默认的路径，默认显示登录页
    { path: '/', component: () => import('@/views/login')},

    //配置登录成功页面，使用时需要使用 path 路径来实现跳转
    { path: '/success', component: () => import('@/views/success')},

    //配置登录失败页面，使用时需要使用 path 路径来实现跳转
    { path: '/error', component: () => import('@/views/error'), hidden: true }
]

export default new VueRouter({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap //指定路由列表
})