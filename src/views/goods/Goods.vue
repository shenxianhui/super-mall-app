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
        <div class="goods-content">
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
            <div class="goods-details">
                <div class="goods-trait">
                    <h2>小米8 屏幕指纹版</h2>
                    <p>全球首款 压感屏幕指纹 / 双频GPS超精准定位 / 支持红外人脸识别 / 骁龙845旗舰处理器</p>
                    <span>￥3399 <del>￥3599</del></span>
                </div>
                <div class="goods-parameter">
                    <div class="merit">
                        <van-icon name="flower-o" />
                        <h5>超大屏</h5>
                        <p>6.21英寸</p>
                    </div>
                    <div class="merit">
                        <van-icon name="flower-o" />
                        <h5>超大屏</h5>
                        <p>6.21英寸</p>
                    </div>
                    <div class="merit">
                        <van-icon name="flower-o" />
                        <h5>超大屏</h5>
                        <p>6.21英寸</p>
                    </div>
                    <div class="merit">
                        <van-icon name="flower-o" />
                        <h5>超大屏</h5>
                        <p>6.21英寸</p>
                    </div>
                    <div class="merit">
                        <van-icon name="flower-o" />
                        <h5>超大屏</h5>
                        <p>6.21英寸</p>
                    </div>
                    <div class="merit">
                        <van-icon name="flower-o" />
                        <h5>超大屏</h5>
                        <p>6.21英寸</p>
                    </div>
                </div>
                <div class="goods-info">
                    <div class="buy">
                        <div class="select">
                            <div class="group">
                                <span>已选</span>
                                <p>小米8 屏幕指纹版 8GB+128GB 透明下x1</p>
                            </div>
                            <van-icon name="arrow" />
                        </div>
                        <div class="select">
                            <div class="group">
                                <span>送至</span>
                                <p>杭州市 江干区</p>
                            </div>
                            <van-icon name="arrow" />
                        </div>
                        <div class="select">
                            <div class="group privilege">
                                <span><van-icon name="passed" />小米自营</span>
                                <span><van-icon name="passed" />小米发货</span>
                                <span><van-icon name="passed" />7天无理由退货</span>
                            </div>
                            <van-icon name="arrow" />
                        </div>
                    </div>
                </div>
            </div>
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
    padding: 0.42rem 0 0.45rem;
    overflow: auto;
    .goods-content {
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
    .goods-details {
        width: 100%;
        padding-bottom: 0.2rem;
        background-color: #fff;
        .goods-trait {
            width: 100%;
            padding: 0.15rem;
            h2 {
                font-size: 0.22rem;
            }
            p {
                font-size: 0.14rem;
                color: #333;
                margin-top: 0.1rem;
                line-height: 0.22rem;
            }
            span {
                display: inline-block;

                font-size: 0.22rem;
                color: #ff6700;
                margin-top: 0.1rem;
                del {
                    font-size: 0.14rem;
                    color: #666;
                }
            }
        }
        .goods-parameter {
            display: flex;

            width: 100%;
            overflow: auto;
            .merit {
                display: flex;
                flex-direction: column;
                align-items: center;

                min-width: 1rem;
                height: 100%;
                padding: 0.05rem 0.1rem;
                &:not(:last-child) {
                    border-right: 1px solid #eee;
                }
                .van-icon {
                    font-size: 0.2rem;
                }
                h5 {
                    font-size: 0.14rem;
                }
                p {
                    font-size: 0.12rem;
                    color: #666;
                }
            }
        }
        .goods-info {
            width: 100%;
            padding: 0 0.15rem;
            .buy {
                width: 100%;
                border-radius: 0.1rem;
                background-color: #eee;
                border: 1px solid #ccc;
                .select {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    width: 100%;
                    height: 0.4rem;
                    padding: 0 0.15rem;
                    &:not(:last-child) {
                        border-bottom: 1px solid #ccc;
                    }
                    .group {
                        display: flex;
                        align-items: center;

                        max-width: 90%;
                        span {
                            min-width: 0.5rem;
                            font-size: 0.12rem;
                            color: #666;
                        }
                        p {
                            width: 100%;
                            font-size: 0.14rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
                    .privilege {
                        span {
                            display: flex;
                            align-items: center;

                            font-size: 0.12rem;
                            &:not(:first-child) {
                                margin-left: 0.08rem;
                            }
                            .van-icon {
                                font-size: 0.15rem;
                                margin-right: 0.05rem;
                                color: #ff6700;
                            }
                        }
                    }
                    .van-icon {
                        color: #999;
                        font-size: 0.2rem;
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
