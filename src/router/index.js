import Vue from 'vue'
import Router from 'vue-router'

/* 主路由 */
const Main = resolve => require.ensure([], () => resolve(require('@/views/Main')), 'Main');

/* 空页面 */
const Blank = resolve => require.ensure([], () => resolve(require('@/views/Blank')), 'Blank');

/* 首页 */
const MainHome = resolve => require.ensure([], () => resolve(require('@/views/home/MainHome')), 'MainHome');
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
        { // 主路由
            path: '',
            name: 'Main',
            component: Main,
            children: [
                { // 首页
                    path: '',
                    name: 'MainHome',
                    component: MainHome,
                    children: [
                        {
                            path: '/home',
                            component: Blank,
                            children: [
                                {
                                    path: '',
                                    name: 'Home',
                                    component: Home
                                }
                            ]
                        }
                    ]
                },
                { // 分类
                    path: '/categories',
                    component: Blank,
                    children: [
                        {
                            path: '',
                            name: 'Categories',
                            component: Categories
                        }
                    ]
                },
                { // 购物车
                    path: '/cart',
                    component: Blank,
                    children: [
                        {
                            path: '',
                            name: 'Cart',
                            component: Cart
                        }
                    ]
                },
                { // 我的
                    path: '/account',
                    component: Blank,
                    children: [
                        {
                            path: '',
                            name: 'Account',
                            component: Account
                        }
                    ]
                }
            ]
        }
    ]
})