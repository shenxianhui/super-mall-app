import Vue from 'vue'
import Router from 'vue-router'

/* 空页面 */
const Main = resolve => require.ensure([], () => resolve(require('@/views/Main')), 'Main');

/* 首页 */
const Home = resolve => require.ensure([], () => resolve(require('@/views/home/Home')), 'Home');

/* 分类 */
const Categories = resolve => require.ensure([], () => resolve(require('@/views/categories/Categories')), 'Categories');

/* 购物车 */
const Cart = resolve => require.ensure([], () => resolve(require('@/views/cart/Cart')), 'Cart');

/* 我的 */
const Account = resolve => require.ensure([], () => resolve(require('@/views/account/Account')), 'Account');

Vue.use(Router)

export default new Router({
    routes: [
        { // 默认页面
            path: '/',
            redirect: '/home'
        },
        { // 首页
            path: '/home',
            component: Main,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home
                }
            ]
        },
        { // 分类
            path: '/categories',
            component: Main,
            children: [
                {
                    path: '',
                    name: 'categories',
                    component: Categories
                }
            ]
        },
        { // 购物车
            path: '/cart',
            component: Main,
            children: [
                {
                    path: '',
                    name: 'cart',
                    component: Cart
                }
            ]
        },
        { // 我的
            path: '/account',
            component: Main,
            children: [
                {
                    path: '',
                    name: 'account',
                    component: Account
                }
            ]
        }
    ]
})