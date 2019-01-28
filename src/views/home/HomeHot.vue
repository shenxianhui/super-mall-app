/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 17:54:56 
 * @Last Modified by: Shen Xianhui
 * @Last Modified time: 2019-01-27 17:56:39
 */
<!-- 首页-热卖 -->
<template>
    <div class="home-hot">
        <van-swipe :autoplay="4000" indicator-color="white">
            <van-swipe-item v-for="item in banners" :key="item.num">
                <img :src="item.src" alt="轮播图">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name: 'HomeHot',
    components: {},
    props: {},
    data() {
        return {
            banners: [
                {
                    num: 1,
                    src: require('@/images/common/banner_1.png')
                },
                {
                    num: 2,
                    src: require('@/images/common/banner_2.png')
                },
                {
                    num: 3,
                    src: require('@/images/common/banner_3.png')
                }
            ]
        };
    },
    computed: {},
    watch: {},
    created() {},
    methods: {}
};
</script>

<style scoped lang='less'>
.home-hot {
    /deep/ .van-swipe {
        width: 100%;
        height: 1.8rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
