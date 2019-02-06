import Vue from 'vue'
import Router from 'vue-router'

/* 主路由 */
const Main = resolve => require.ensure([], () => resolve(require('@/views/Main')), 'Main');

/* 空页面 */
const Blank = resolve => require.ensure([], () => resolve(require('@/views/Blank')), 'Blank');

/* 首页 */
const Home = resolve => require.ensure([], () => resolve(require('@/views/home/Home')), 'Home');
const HomeHot = resolve => require.ensure([], () => resolve(require('@/views/home/HomeHot')), 'HomeHot');
const HomeNew = resolve => require.ensure([], () => resolve(require('@/views/home/HomeNew')), 'HomeNew');
const HomePreferential = resolve => require.ensure([], () => resolve(require('@/views/home/HomePreferential')), 'HomePreferential');
const HomeMore = resolve => require.ensure([], () => resolve(require('@/views/home/HomeMore')), 'HomeMore');

/* 分类 */
const Categories = resolve => require.ensure([], () => resolve(require('@/views/categories/Categories')), 'Categories');
// const CategoriesHot = resolve => require.ensure([], () => resolve(require('@/views/categories/CategoriesHot')), 'CategoriesHot');
// const CategoriesNew = resolve => require.ensure([], () => resolve(require('@/views/categories/CategoriesNew')), 'CategoriesNew');
// const CategoriesPreferential = resolve => require.ensure([], () => resolve(require('@/views/categories/CategoriesPreferential')), 'CategoriesPreferential');
// const CategoriesMore = resolve => require.ensure([], () => resolve(require('@/views/categories/CategoriesMore')), 'CategoriesMore');

/* 购物车 */
const Cart = resolve => require.ensure([], () => resolve(require('@/views/cart/Cart')), 'Cart');

/* 我的 */
const Account = resolve => require.ensure([], () => resolve(require('@/views/account/Account')), 'Account');

Vue.use(Router)

export default new Router({
    routes: [
        { // 默认页面
            path: '/',
            redirect: '/home/home-hot'
        },
        { // 主路由
            path: '',
            name: 'Main',
            component: Main,
            children: [
                { // 首页
                    path: '',
                    name: 'Home',
                    component: Home,
                    children: [
                        {
                            path: '/home',
                            component: Blank,
                            children: [
                                { // 热卖
                                    path: 'home-hot',
                                    name: 'HomeHot',
                                    component: HomeHot
                                },
                                { // 新品
                                    path: 'home-new',
                                    name: 'HomeNew',
                                    component: HomeNew
                                },
                                { // 优惠
                                    path: 'home-preferential',
                                    name: 'HomePreferential',
                                    component: HomePreferential
                                },
                                { // 更多
                                    path: 'home-more',
                                    name: 'HomeMore',
                                    component: HomeMore
                                },
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
                // { // 分类
                //     path: '',
                //     name: 'Categories',
                //     component: Categories,
                //     children: [
                //         {
                //             path: '/categories',
                //             component: Blank,
                //             children: [
                //                 { // 热卖
                //                     path: 'categories-hot',
                //                     name: 'CategoriesHot',
                //                     component: CategoriesHot
                //                 },
                //                 { // 新品
                //                     path: 'categories-new',
                //                     name: 'CategoriesNew',
                //                     component: CategoriesNew
                //                 },
                //                 { // 优惠
                //                     path: 'categories-preferential',
                //                     name: 'CategoriesPreferential',
                //                     component: CategoriesPreferential
                //                 },
                //                 { // 更多
                //                     path: 'categories-more',
                //                     name: 'CategoriesMore',
                //                     component: CategoriesMore
                //                 }
                //             ]
                //         }
                //     ]
                // },
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