/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 11:21:41 
 * @Last Modified by: ShenXianhui
 * @Last Modified time: 2019-02-13 09:25:14
 */
<!-- 顶部标签栏 -->
<template>
    <div class="tab">
        <van-tabs v-model="active" sticky swipeable animated @change="getPage">
            <van-tab v-for="item in tabList" :key="item" :title="item">
                <router-view></router-view>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    name: 'Tab',
    data() {
        return {
            active: 0, // 当前栏

            tabList: ['热卖', '新品', '优惠', '更多'] // tab 列表
        };
    },
    methods: {
        // 切换页面
        getPage(index, title) {
            switch(index) {
                case 0:
                    this.$router.push('/home/home-hot');
                    break;
                case 1:
                    this.$router.push('/home/home-new');
                    break;
                case 2:
                    this.$router.push('/home/home-preferential');
                    break;
                case 3:
                    this.$router.push('/home/home-more');
                    break;
                default:
                    return false;
            }
        }
    }
};
</script>

<style scoped lang='less'>
.tab {
    width: 100%;
    height: 100%;
    /deep/ .van-tabs {
        width: 100%;
        height: 100%;
        padding-top: 0.35rem;
        .van-tabs__wrap {
            height: 0.35rem;
            .van-tabs__nav {
                padding-bottom: 0;
                .van-tabs__line {
                    height: 0.02rem;
                    bottom: 0;
                    background: #ff6700;
                }
            }
            .van-tab {
                line-height: 0.37rem;
                font-size: 0.14rem;
            }
            .van-tab--active {
                color: #ff6700;
            }
        }
        .van-tabs__content {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
