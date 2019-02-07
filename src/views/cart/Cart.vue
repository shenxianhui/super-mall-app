/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 09:17:47 
 * @Last Modified by: Shen Xianhui
 * @Last Modified time: 2019-02-07 10:00:36
 */
<!-- 购物车 -->
<template>
    <div class="cart">
        <!-- 标题栏 -->
        <Header
            :isTitle="true"
            title="购物车"
            titleIcon="location"
            :isScan="false"
            :isBack="false"
            :rightBtn="rightBtn"
            @handleTitle="handleTitle"
            @handleIcon="handleIcon">
        </Header>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <!-- 内容 -->
            <div class="cart-container">
                <div class="goods-number">
                    <span>共0件商品</span>
                </div>
                <div class="cart-content">
                    <div class="cart-info">
                        <img src="@/images/common/cart.png" alt="购物车">
                        <span>购物车竟然是空的</span>
                        <p>再忙, 也要记得买点什么犒劳自己~</p>
                    </div>
                </div>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
    name: 'Cart',
    components: {
        Header
    },
    props: {},
    data() {
        return {
            isLoading: false, // 下拉刷新

            // 右侧按钮
            rightBtn: {
                number: 2,
                iconName: [
                    'setting-o',
                    'chat-o'
                ]
            }
        };
    },
    computed: {},
    watch: {},
    created() {},
    methods: {
        // 右侧按钮
        handleIcon(obj) {
            if (obj.index === 0) {
                console.log('设置');
            } else {
                console.log('消息');
            }
        },

        // 标题按钮
        handleTitle() {
            console.log('选择收货地址');
        },

        // 下拉刷新
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
            }, 500);
        }
    }
};
</script>

<style scoped lang='less'>
.cart {
    width: 100%;
    height: 100%;
    padding-top: 0.42rem;
    background-color: #fff;
    .cart-container {
        .goods-number {
            width: 100%;
            height: 1.8rem;
            padding: 0.1rem;
            background-color: #ff6700;
            span {
                font-size: 0.16rem;
                color: #fff;
            }
        }
        .cart-content {
            .cart-info {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                width: 2.5rem;
                margin: 0.5rem auto;
                img {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                }
                span {
                    font-size: 0.18rem;
                    color: #333;
                }
                p {
                    font-size: 0.14rem;
                    margin-top: 0.1rem;
                    color: #999;
                }
            }
        }
    }
}
</style>
