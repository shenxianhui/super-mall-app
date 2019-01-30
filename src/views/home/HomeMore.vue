/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 17:59:27 
 * @Last Modified by: ShenXianhui
 * @Last Modified time: 2019-01-30 17:04:02
 */
<!-- 首页-更多 -->
<template>
    <div class="home-more" ref="main">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad">
            <div class="goods" ref="con">
                <div class="goods-content" v-for="item in dataList" :key="item.id">
                    <div class="goods-picture" @click="get">
                        <img :src="item.imgSrc" alt="商品">
                    </div>
                    <p class="goods-name">{{ item.name || '-' }}</p>
                    <p class="goods-details">{{ item.details || '-' }}</p>
                    <span>{{ item.price || '-' }}元</span>
                </div>
            </div>
        </van-list>
        <ToTop :distance="distance"></ToTop>
    </div>
</template>

<script>
import ToTop from '@/components/ToTop'

export default {
    name: 'HomeMore',
    components: {
        ToTop
    },
    props: {},
    data() {
        return {
            loading: false, // 加载中
            finished: false, // 加载完成

            dataList: [ // 数据列表
                // {
                //     name: '小米8',
                //     details: '潮流镜面渐变色，2400万自拍旗舰',
                //     price: '1299',
                //     imgSrc: require('@/images/common/mi_phone_1.png')
                // }
            ],
            scrollParam: { // 回到顶部参数
                way: 1,
                distance: 20,
                time: 600
            }
        };
    },
    computed: {
        distance() {
            if(this.$refs.main){
                return this.$refs.main.scrollTop;
            }else{
                return 0;
            }
            
        }
    },
    watch: {},
    mounted() {
        let that = this;
        this.$refs.main.onscroll=function(){
            console.log(that.$refs.main.scrollTop);
        }
        
        
    },
    methods: {
        onLoad() { // 无限加载
            setTimeout(() => {
                for (let i = 0; i < 20; i++) {
                    let obj = {
                        name: '',
                        details: '',
                        price: '',
                        imgSrc: ''
                    };
                    let word = ['丽', '民', '鹏', '艳', '刚', '婵', '征', '慧', '磊'];
                    
                    obj.name = '小米' + Math.round(Math.random() * 9); // 1-9随机数
                    for (let i = 0; i < 8; i++) {
                        let num = Math.round(Math.random() * 8);
                        obj.details += word[num];
                    }
                    obj.price = Math.round(Math.random() * 9999);
                    obj.imgSrc = require('@/images/common/mi_phone_' + Math.round(Math.random() * 7 + 1) + '.png');
                    this.dataList.push(obj);
                }
                this.loading = false;
                if (this.dataList.length >= 100) {
                    this.finished = true;
                }
            }, 500);
        },
        get () {
            // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            console.log(this.$refs.con.offsetTop);
        }
    }
};
</script>

<style scoped lang='less'>
.home-more {
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow: auto;
    background: #fff url('../../images/common/bg_1.png') no-repeat 0 0;
    background-size: 100% 100%;
    .goods {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        padding: 0.1rem 0.1rem;
        .goods-content {
            display: flex;
            align-items: center;
            flex-direction: column;

            width: 1.74rem;
            padding: 0.1rem 0.08rem;
            margin-bottom: 0.08rem;
            background-color: #fff;
            border-radius: 0.04rem;
            .goods-picture {
                width: 100%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .goods-name {
                width: 100%;
                text-align: center;
                font-size: 0.14rem;
                color: #000;
                margin-top: 0.1rem;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .goods-details {
                width: 100%;
                text-align: center;
                font-size: 0.12rem;
                color: #666;
                margin-top: 0.1rem;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            span {
                font-size: 0.14rem;
                color: #ff6700;
                margin-top: 0.1rem;
            }
        }
    }
}
</style>
