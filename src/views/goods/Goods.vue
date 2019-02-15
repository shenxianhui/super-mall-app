/*
 * @Author: ShenXianhui 
 * @Date: 2019-02-15 14:40:03 
 * @Last Modified by: ShenXianhui
 * @Last Modified time: 2019-02-15 16:43:44
 */
<!-- 商品详情 -->
<template>
    <div class="goods">
        <!-- 标题栏 -->
        <Header
            :isTitle="true"
            title="商品详情"
            :isScan="false"
            :isBack="true"
            :setBack="false">
        </Header>
        <!-- 内容 -->
        <div class="goods-details">
            <!-- 轮播图 -->
            <van-swipe :autoplay="5000" indicator-color="white">
                <van-swipe-item>
                    <img src="@/images/common/mi_phone_1.png" alt="商品">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="@/images/common/mi_phone_2.png" alt="商品">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="@/images/common/mi_phone_3.png" alt="商品">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 底部tab -->
        <van-goods-action>
            <van-goods-action-mini-btn
                icon="like-o"
                text="喜欢"
                @click="getLike"
            />
            <van-goods-action-mini-btn
                icon="cart-o"
                text="购物车"
                @click="getCart"
            />
            <van-goods-action-big-btn
                text="加入购物车"
                @click="getGoods"
            />
        </van-goods-action>
    </div>
</template>

<script>
import Header from '@/components/Header';

export default {
    name: 'goods',
    components: {
        Header
    },
    props: {},
    data() {
        return {
            placeholder: '请输入内容', // 搜索框提示
        };
    },
    computed: {},
    watch: {},
    created() {},
    methods: {
        // 喜欢此商品
        getLike() {
            console.log('喜欢');
        },

        // 进入购物车
        getCart() {
            this.$router.push('/cart');
        },

        // 添加购物车
        getGoods() {
            console.log('添加购物车');
        }
    }
};
</script>

<style scoped lang='less'>
.goods {
    width: 100%;
    height: 100%;
    padding-top: 0.42rem;
    .goods-details {
        /* 轮播图 */
        /deep/ .van-swipe {
            width: 100%;
            height: 3.5rem;
            .van-swipe__track {
                .van-swipe-item {
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
    /* 底部tab */
    /deep/ .van-goods-action {
        .van-goods-action-mini-btn {
            min-width: 20%;
            height: 0.45rem;
            font-size: 0.14rem;
            .van-goods-action-mini-btn__icon {
                font-size: 0.18rem;
            }
        }
        .van-button--large {
            height: 0.45rem;
            line-height: 0.45rem;
            background-color: #ff6700;
        }
    }
}
</style>
