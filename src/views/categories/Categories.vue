/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 09:16:12 
 * @Last Modified by: Shen Xianhui
 * @Last Modified time: 2019-02-05 17:45:47
 */
<!-- 分类 -->
<template>
    <div class="categories">
        <!-- 标题栏 -->
        <Header
            :isTitle="false"
            :placeholder="placeholder"
            :isScan="true"
            :isBack="false"
            :rightBtn="rightBtn"
            @handleIcon="handleIcon">
        </Header>
        <!-- 左侧tab栏 -->
        <div class="tab-side">
            <van-badge-group :active-key="activeKey" @change="onChange">
                <van-badge title="热卖" />
                <van-badge title="新品" />
                <van-badge title="优惠" />
                <van-badge title="更多" />
            </van-badge-group>
        </div>
        <!-- 右侧商品区 -->
        <div class="goods">
            <div class="goods-list" ref="goodsList">
                <div class="goods-details" v-for="item in dataList" :key="item.id">
                    <img src="@/images/common/mi_loudspeaker_box.png" alt="商品">
                    <div class="goods-info">
                        <h3>【{{ item.label }}】{{ item.name }}</h3>
                        <p>{{ item.info }}</p>
                        <span>￥{{ item.price }}</span>
                        <van-icon name="shopping-cart" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header';

export default {
    name: 'Categories',
    components: {
        Header
    },
    props: {},
    data() {
        return {
            placeholder: '请输入内容', // 搜索框提示
            activeKey: 0,

            rightBtn: { // header 右侧按钮
                number: 1, // 按钮数量
                iconName: ['chat-o']
            },
            dataList: [ // 商品列表
                {
                    label: '热卖',
                    name: '北京烤鸭',
                    info: '老北京特产, 外酥里嫩, 美味十足',
                    price: '88.88'
                }
            ]
        };
    },
    computed: {},
    watch: {},
    created() {},
    methods: {
        // 右侧按钮
        handleIcon() {
            console.log('消息中心');
        },

        // 左侧tab切换
        onChange(key) {
            let randomNum;

            this.$refs.goodsList.scrollTop = 0;
            randomNum = Math.round(Math.random()*20 + 1);
            this.dataList.length = 0;
            for (let i = 0; i < randomNum; i++) {
                let goods = {
                    label: '热卖',
                    name: '北京烤鸭',
                    info: '老北京特产, 外酥里嫩, 美味十足',
                    price: '88.88'
                }
                let price = Math.round(Math.random() * 20000) / 100;

                goods.price = price;
                this.dataList.push(goods);
            }

            this.activeKey = key;
            switch(key) {
                case 0:
                    this.dataList.forEach(item => {
                        item.label = '热卖';
                    });
                    break;
                case 1:
                    this.dataList.forEach(item => {
                        item.label = '新品';
                    });
                    break;
                case 2:
                    this.dataList.forEach(item => {
                        item.label = '优惠';
                    });
                    break;
                case 3:
                    this.dataList.forEach(item => {
                        item.label = '更多';
                    });
                    break;
                default:
                    return false;
            }
        }
    }
};
</script>

<style scoped lang='less'>
.categories {
    width: 100%;
    height: 100%;
    padding-top: 0.42rem;
    .tab-side {
        position: fixed;
        top: 0.42rem;

        width: 1rem;
        height: 100%;
        padding-bottom: 0.9rem;
        background-color: #eee;
        /deep/ .van-badge-group {
            height: 100%;
            overflow: auto;
        }
        /deep/ .van-badge-group::-webkit-scrollbar { /* 隐藏滚动条, 这种方式不兼容 火狐 和 IE */
            display: none;
        }
    }
    .goods {
        width: 100%;
        height: 100%;
        background-color: #fff;
        padding-left: 1rem;
        .goods-list {
            width: 100%;
            height: 100%;
            overflow: auto;
            .goods-details {
                display: flex;
                justify-content: space-between;

                width: 100%;
                height: 1.2rem;
                padding: 0.1rem 0.05rem;
                border-bottom: 1px solid #eee;
                img {
                    width: 1rem;
                    height: 100%;
                }
                .goods-info {
                    position: relative;

                    width: 100%;
                    height: 100%;
                    padding: 0.1rem;
                    h3 {
                        width: 1.5rem;
                        font-size: 0.16rem;
                        color: #000;

                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    p {
                        width: 1.5rem;
                        font-size: 0.14rem;
                        color: #666;
                        margin-top: 0.1rem;

                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    span {
                        display: inline-block;

                        color: #ff6700;
                        font-size: 0.16rem;
                        margin-top: 0.1rem;
                    }
                    .van-icon {
                        position: absolute;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        width: 0.25rem;
                        height: 0.25rem;
                        border-radius: 50%;
                        background-color: #ff6700;
                        color: #fff;
                        right: 0.1rem;
                        bottom: 0.05rem;
                    }
                }
            }
        }
        .goods-list::-webkit-scrollbar { /* 隐藏滚动条, 这种方式不兼容 火狐 和 IE */
            display: none;
        }
    }
}
</style>
