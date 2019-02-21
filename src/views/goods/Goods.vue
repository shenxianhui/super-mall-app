/*
 * @Author: ShenXianhui 
 * @Date: 2019-02-15 14:40:03 
 * @Last Modified by: ShenXianhui
 * @Last Modified time: 2019-02-21 17:30:45
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
            <van-swipe :autoplay="8000" indicator-color="white">
                <van-swipe-item>
                    <img :src="setImg(goodsData.imgSrc)" alt="商品">
                </van-swipe-item>
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
                    <h2>{{ this.goodsData.name }}</h2>
                    <p>{{ this.goodsData.specifications }}</p>
                    <span>
                        ￥{{ this.goodsData.currentPrice }}
                        <del>￥{{ this.goodsData.costPrice }}</del>
                    </span>
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
                        <div class="select" @click="getSku()">
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
                @click="getLike()"
            />
            <van-goods-action-mini-btn
                info="1"
                icon="cart-o"
                text="购物车"
                @click="getCart()"
            />
            <van-goods-action-big-btn
                text="加入购物车"
                @click="getSku()"
            />
        </van-goods-action>
        <!-- 商品规格 -->
        <div class="sku">
            <van-popup
                v-model="isSku"
                position="bottom"
                :overlay="true">
                <div class="container">
                    <div class="sku-details">
                        <img :src="setImg(goodsData.imgSrc)" alt="商品">
                        <div class="title">
                            <div class="price">
                                <span>￥{{ this.goodsData.currentPrice }}</span>
                                <del>￥{{ this.goodsData.costPrice }}</del>
                            </div>
                            <p>{{ this.goodsData.name }} {{ this.goodsData.specifications }}</p>
                        </div>
                    </div>
                    <div class="content">
                        <div class="parameter">
                            <h4>{{ specifications.title }}</h4>
                            <div class="parameter-select">
                                <span
                                    :class="specificationsIndex === index ? 'active' : ''"
                                    v-for="(item, index) in specifications.option"
                                    :key="item.id"
                                    @click="getParameter(item.value, index, 'specifications')">
                                    {{ item.label }}
                                </span>
                            </div>
                        </div>
                        <div class="parameter">
                            <h4>{{ colors.title }}</h4>
                            <div class="parameter-select">
                                <span
                                    :class="colorIndex === index ? 'active' : ''"
                                    v-for="(item, index) in colors.option"
                                    :key="item.id"
                                    @click="getParameter(item.value, index, 'color')">
                                    {{ item.label }}
                                </span>
                            </div>
                        </div>
                        <div class="quantity">
                            <h4>购买数量</h4>
                            <van-stepper
                                v-model="stepperNum"
                                :integer="isInteger"
                                :disable-input="isDisable" />
                        </div>
                    </div>
                </div>
                <div class="add-cart" @click="addCart()">确定</div>
            </van-popup>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header';
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'goods',
    components: {
        Header
    },
    props: {},
    data() {
        return {
            placeholder: '请输入内容', // 搜索框提示
            isSku: false, // 商品规格弹出框
            stepperNum: 1, // 当前输入值
            isInteger: true, // 是否只允许输入整数
            isDisable: true, // 是否禁用输入框
            specificationsIndex: 0, // 商品规格-参数索引
            colorIndex: 0, // 商品规格-颜色索引
            selectSpecifications: '', // 选择-商品参数
            selectColor: '', // 选择-商品颜色

            goodsData: {}, // 商品数据
            specifications: { // 商品规格-规格
                title: '规格',
                option: [
                    {
                        label: '8GB+128GB',
                        value: '8GB+128GB'
                    },
                    {
                        label: '6GB+256GB',
                        value: '6GB+256G'
                    }
                ]
            },
            colors: { // 商品规格-颜色
                title: '颜色',
                option: [
                    {
                        label: '红色',
                        value: '红色'
                    },
                    {
                        label: '黑色',
                        value: '黑色'
                    }
                ]
            }
        };
    },
    computed: {
        ...mapState([
            'goods' // 商品信息
        ])
    },
    watch: {},
    created() {
        console.log(this.goods);
        this.goodsData = this.goods;
    },
    methods: {
        ...mapMutations([
            'setGoodsList' // 商品列表
        ]),

        // 喜欢此商品
        getLike() {
            console.log('喜欢');
        },

        // 加入购物车 (商品规格选择)
        getSku() {
            this.isSku = true;
        },

        // 点击遮罩层
        setOverlay() {
            this.isSku = false;
        },

        // 商品规格-参数选择
        getParameter(value, index, type) {
            if (type === 'specifications') {
                this.specificationsIndex = index;
                this.selectSpecifications = value;
            } else {
                this.colorIndex = index;
                this.selectColor = value;
            }
        },

        // 商品规格-确定 (加入购物车)
        addCart() {
            this.selectSpecifications = this.specifications.option[0].value;
            this.selectColor = this.colors.option[0].value;
            this.goodsData.specifications = this.selectSpecifications;
            this.goodsData.colors = this.selectColor;
            this.setGoodsList(this.goodsData);
            this.$toast.success('添加成功');
            this.isSku = false;
        },

        // 进入购物车
        getCart() {
            this.$router.push('/cart');
        },

        // 设置图片地址
        setImg(v) {
            return require('../../' + v);
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
        .goods-parameter::-webkit-scrollbar { /* 隐藏滚动条, 这种方式不兼容 火狐 和 IE */
            display: none;
        }
        .goods-info {
            width: 100%;
            padding: 0 0.15rem;
            margin-top: 0.1rem;
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
            height: 0.5rem;
            font-size: 0.14rem;
            .van-goods-action-mini-btn__icon {
                font-size: 0.18rem;
                .van-info {
                    top: -0.03rem;
                    right: -0.05rem;
                }
            }
        }
        .van-button--large {
            height: 0.5rem;
            line-height: 0.5rem;
            background-color: #ff6700;
        }
    }
    /* 商品规格弹出框 */
    .sku {
        /deep/ .van-popup {
            width: 100%;
            height: 70%;
            border-radius: 0.06rem 0.06rem 0 0;
            overflow: hidden;
            .container {
                height: 100%;
                .sku-details {
                    position: fixed;
                    top: 0;

                    display: flex;

                    width: 100%;
                    height: 1.3rem;
                    padding: 0.15rem;
                    background-color: #fff;
                    border-bottom: 1px solid #eee;
                    z-index: 9;
                    img {
                        width: 1rem;
                        height: 1rem;
                        border: 1px solid #ddd;
                        border-radius: 0.03rem;
                    }
                    .title {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;

                        width: 100%;
                        padding-left: 0.05rem;
                        .price {
                            width: 100%;
                            span {
                                font-size: 0.25rem;
                                color: #ff6700;
                            }
                            del {
                                font-size: 0.14rem;
                                color: #666;
                            }
                        }
                        p {
                            font-size: 0.13rem;
                        }
                    }
                }
                .content {
                    height: 100%;
                    padding: 1.3rem 0.15rem 0.5rem;
                    overflow: auto;
                    .parameter {
                        padding: 0.1rem 0 0.1rem;
                        border-bottom: 1px solid #eee;
                        h4 {
                            font-weight: normal;
                            font-size: 0.16rem;
                        }
                        .parameter-select {
                            display: flex;
                            flex-wrap: wrap;
                            span {
                                padding: 0.06rem;
                                border-radius: 0.03rem;
                                border: 1px solid #ccc;
                                margin-top: 0.08rem;
                                &:not(:last-child) {
                                    margin-right: 0.08rem;
                                }
                            }
                            .active {
                                color: #ff6700;
                                border-color: #ff6700;
                            }
                        }
                    }
                    .quantity {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        padding: 0.1rem 0 0.1rem;
                        h4 {
                            font-weight: normal;
                            font-size: 0.16rem;
                            margin-bottom: 0.1rem;
                        }
                    }
                }
                .content::-webkit-scrollbar { /* 隐藏滚动条, 这种方式不兼容 火狐 和 IE */
                    display: none;
                }
            }
            .add-cart {
                position: fixed;
                bottom: 0;

                width: 100%;
                height: 0.5rem;
                text-align: center;
                line-height: 0.5rem;
                font-size: 0.16rem;
                background-color: #ff6700;
                color: #fff;

                z-index: 9;
            }
        }
    }
}
</style>
