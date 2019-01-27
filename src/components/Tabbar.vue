/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 09:44:11 
 * @Last Modified by: Shen Xianhui
 * @Last Modified time: 2019-01-27 19:05:22
 */
<!-- 底部标签栏 -->
<template>
    <div class='tabbar'>
        <van-tabbar v-model="active">
            <!-- 注: router-link 文本改变颜色需要设置, 所以用下面方法 -->
            <!-- <van-tabbar-item icon="home-o">
                <router-link to="/home">首页</router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="apps-o">
                <router-link to="/categories">分类</router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="cart-o">
                <router-link to="/cart">购物车</router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="contact">
                <router-link to="/account">我的</router-link>
            </van-tabbar-item> -->
            <van-tabbar-item icon="home-o" to="/home/home-hot">首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/categories">分类</van-tabbar-item>
            <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="contact" to="/account">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: 'tabbar',
    components: {},
    props: {},
    data() {
        return {
            active: 0
        };
    },
    computed: {},
    watch: {},
    created() {},
    methods: {}
};
</script>

<style scoped lang='less'>

</style>
