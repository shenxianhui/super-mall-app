/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 09:17:47 
 * @Last Modified by: ShenXianhui
 * @Last Modified time: 2019-02-21 16:54:06
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
        <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <!-- 内容 -->
            <div class="cart-container">
                <div class="goods-number">
                    <span>共{{ goodsList.length }}件商品</span>
                </div>
                <div class="cart-content" v-show="false">
                    <div class="cart-info">
                        <img src="@/images/common/cart.png" alt="购物车">
                        <span>购物车竟然是空的</span>
                        <p>再忙, 也要记得买点什么犒劳自己~</p>
                    </div>
                </div>
                <div class="goods-list">
                    <div class="goods-card" v-for="item in goodsList" :key="item.id">
                        <van-checkbox checked-color="#ff6700" v-model="item.select" @change="setCheckedSingle()"></van-checkbox>
                        <div class="goods-details">
                            <div class="wrap" @click="getDetails(item)">
                                <img :src="setImg(item.imgSrc)" alt="商品">
                                <div class="goods-info">
                                    <h4>{{ item.name }}</h4>
                                    <p>{{ item.specifications }}</p>
                                    <div class="price">
                                        <span>￥{{ item.currentPrice }}</span>
                                        <del>￥{{ item.costPrice }}</del>
                                    </div>
                                </div>
                            </div>
                            <van-stepper v-model="item.quantity" :disable-input="true" />
                        </div>
                    </div>
                </div>
            </div>
        </van-pull-refresh>
        <!-- 提交订单栏 -->
        <van-submit-bar
            :loading="isSubLoading"
            :price="total"
            button-text="结算"
            @submit="onSubmit">
            <div class="checked-all" @click="setCheckedAll()">
                <van-icon :class="checkedAll ? 'active' : ''" name="success" />
                <span>全选</span>
            </div>
        </van-submit-bar>
    </div>
</template>

<script>
import Header from '@/components/Header';
import { mapMutations } from 'vuex';

export default {
    name: 'Cart',
    components: {
        Header
    },
    props: {},
    data() {
        return {
            isLoading: false, // 下拉刷新
            checkedSingle: true, // 商品选择-单个
            checkedAll: true, // 商品选择-全部
            stepperNum: 1, // 商品数量-当前输入值
            isSubLoading: false, // 提交订单loading

            rightBtn: { // 右侧按钮
                number: 2,
                iconName: [
                    'setting-o',
                    'chat-o'
                ]
            },
            goodsList: [ // 商品列表
                {
                    select: true,
                    label: '热卖',
                    name: '小米8 屏幕指纹版 8GB内存',
                    specifications: '透明 128GB',
                    currentPrice: 3399,
                    costPrice: 3599,
                    imgSrc: 'images/common/cart.png',
                    quantity: 1
                },
                {
                    select: true,
                    label: '热卖',
                    name: '小米7 屏幕指纹版 8GB内存',
                    specifications: '透明 128GB',
                    currentPrice: 4399,
                    costPrice: 4599,
                    imgSrc: 'images/common/cart.png',
                    quantity: 2
                }
            ]
        };
    },
    computed: {
        // 总价
        total() {
            let sum = 0;
            this.goodsList.forEach(item => {
                if (item.select) {
                    sum += +item.currentPrice * item.quantity;
                }
            });
            return sum * 100;
        }
    },
    watch: {},
    created() {},
    methods: {
        ...mapMutations([
            'setGoods' // 商品信息
        ]),

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

        // 商品选择按钮
        setCheckedSingle() {
            let selectAll = true;
            this.goodsList.forEach(item => {
                if (!item.select) {
                    selectAll = false;
                }
            });
            this.checkedAll = selectAll;
        },

        // 全选
        setCheckedAll() {
            this.checkedAll = !this.checkedAll;
            if (this.checkedAll) {
                this.goodsList.forEach(item => {
                    item.select = true;
                });
            } else {
                this.goodsList.forEach(item => {
                    item.select = false;
                });
            }
        },

        // 下拉刷新
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
            }, 500);
        },

        // 设置图片地址
        setImg(v) {
            return require('../../' + v);
        },

        // 结算
        onSubmit() {
            this.isSubLoading = true;
            setTimeout(() => {
                this.isSubLoading = false;
                this.$toast.success('购买成功');
            }, 2000)
        },

        // 获取商品详情
        getDetails(data) {
            this.setGoods(data);
            this.$router.push('/goods');
        }
    }
};
</script>

<style scoped lang='less'>
.cart {
    width: 100%;
    height: 100%;
    padding-top: 0.42rem;
    /deep/ .van-pull-refresh {
        overflow: auto;
    }
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
        .goods-list {
            position: absolute;
            top: 0.7rem;

            width: 100%;
            padding: 0 0.1rem 0.5rem;
            .goods-card {
                display: flex;

                width: 100%;
                padding: 0.1rem;
                border-radius: 0.08rem;
                background-color: #fff;
                margin-bottom: 0.1rem;
                /* 复选框 */
                /deep/ .van-checkbox {
                    width: 0.25rem;
                    height: 0.25rem;
                    margin-top: 0.25rem;
                }
                .goods-details {
                    display: flex;
                    flex-direction: column;

                    width: 100%;
                    padding-left: 0.1rem;
                    .wrap {
                        display: flex;
                        img {
                            width: 0.8rem;
                            height: 0.8rem;
                            border: 1px solid #eee;
                            border-radius: 0.02rem;
                        }
                        .goods-info {
                            width: 100%;
                            padding: 0.05rem 0.1rem;
                            h4 {
                                font-size: 0.14rem;
                                font-weight: normal;
                            }
                            p {
                                font-size: 0.12rem;
                                color: #999;
                                margin-top: 0.05rem;
                            }
                            .price {
                                margin-top: 0.05rem;
                                span {
                                    font-size: 0.17rem;
                                    color: #ff6700;
                                }
                                del {
                                    font-size: 0.14rem;
                                    color: #666;
                                }
                            }
                        }
                    }
                    /deep/ .van-stepper {
                        display: flex;
                        justify-content: flex-end;
                        margin-top: 0.05rem;
                        button {
                            width: 0.3rem;
                            height: 0.3rem;
                            padding: 0;
                        }
                        input {
                            width: 0.3rem;
                            height: 0.28rem;
                            padding: 0;
                        }
                    }
                }
            }
        }
    }
    /* 提交订单栏 */
    /deep/ .van-submit-bar {
        bottom: 0.5rem;
        .van-submit-bar__bar {
            height: 0.5rem;
            .checked-all {
                display: flex;
                align-items: center;
                .van-icon {
                    display: inline-block;

                    width: 0.25rem;
                    height: 0.25rem;
                    text-align: center;
                    line-height: 0.28rem;
                    margin: 0 0.1rem;
                    border: 1px solid #ddd;
                    border-radius: 50%;
                    color: #fff;
                }
                .active {
                    background-color: #ff6700;
                }
            }
            .van-button {
                height: 0.5rem;
                line-height: 0.5rem;
                background-color: #ff6700;
                border: none;
            }
        }
    }
}
</style>
