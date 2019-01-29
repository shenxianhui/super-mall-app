/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 09:44:11 
 * @Last Modified by: ShenXianhui
 * @Last Modified time: 2019-01-29 13:54:28
 */
<!-- 底部标签栏 -->
<template>
    <div class='tabbar'>
        <van-tabbar v-model="active" active-color="#ff6700">
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
.tabbar {
    /deep/ .van-tabbar {
        height: 0.5rem;
        background-color: #fdfdfd;
        box-shadow: 0px 2px 20px 0px rgba(120, 120, 120, 0.1);
        .van-tabbar-item {
            .van-tabbar-item__icon {
                font-size: 0.18rem;
            }
            .van-tabbar-item__text {
                font-size: 0.12rem;
            }
        }
    }
}
</style>
