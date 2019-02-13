/*
 * @Author: ShenXianhui 
 * @Date: 2019-02-13 09:02:32 
 * @Last Modified by: ShenXianhui
 * @Last Modified time: 2019-02-13 17:19:49
 */
<!-- 抽奖系统-转盘-CSS3 -->
<template>
    <div class="lottery-turntable">
        <div class="wrapper">
            <div class="panel">
                <!-- 按钮 -->
                <div class="pointer" @click="getPrize">开始</div>
                <i :style="{
                        transform: isRevolve ? 'rotate(5000deg)' : '',
                        transition: isRevolve ? 'transform 6s cubic-bezier(.22,.74,.38,.99)' : ''
                    }">
                </i>
                <!-- 奖项 -->
                <div class="prize">
                    <div class="sector" v-for="item in prize" :key="item.id">
                        <div class="sector-inner">
                            <span>{{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 彩灯 -->
            <div class="lamp">
                <div class="light"></div>
                <div class="light"></div>
                <div class="light"></div>
                <div class="light"></div>
                <div class="light"></div>
                <div class="light"></div>
                <div class="light"></div>
                <div class="light"></div>
                <div class="light"></div>
                <div class="light"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LotteryTurntable',
    props: {
        prize: { // 奖品内容
            type: Array,
            default: function () {
                return ['谢谢参与', '1000积分', '5元话费', 'iPhone XS', '1元话费', '100积分', '10元话费', '再来一次', '50积分', '宝马 X5']
            }
        },
        probability: { // 中奖概率
            type: Array,
            default: function () {
                return ['10%', '20%', '...']
            }
        },
        duration: { // 转动时间
            type: Number,
            default: 6
        },
        circulate: { // 最少转动圈数
            type: Number,
            default: 10
        },
        curve: { // 贝塞尔曲线: http://cubic-bezier.com
            type: String,
            default: '.22,.74,.38,.99'
        }
    },
    data() {
        return {
            isRevolve: false, // 点击抽奖
        };
    },
    computed: {},
    watch: {},
    created() {},
    methods: {
        // 点击抽奖按钮
        getPrize() {
            !this.isRevolve ? this.isRevolve = true : this.isRevolve = false;
        },
        

    }
};
</script>

<style scoped lang='less'>
.lottery-turntable {
    .wrapper {
        position: relative;

        height: 3rem;
        width: 3rem;
        background-color: #c0381f;
        box-shadow: #000000 0px 0px 10px;
        border-radius: 50%;
        .panel {
            position: absolute;
            left: 50%;
            top: 50%;
            margin: -1.2rem 0 0 -1.2rem;

            height: 2.4rem;
            width: 2.4rem;
            background-color: #b7b7b7;
            border-radius: 50%;
            overflow: hidden;
            .pointer {
                position: absolute;
                left: 50%;
                top: 50%;
                margin: -0.2rem 0 0 -0.2rem;

                height: 0.4rem;
                width: 0.4rem;
                text-align: center;
                line-height: 0.4rem;
                font-size: 0.12rem;
                color: #fff899;
                background-color: #dc5b5b;
                border-radius: 50%;
                border: 1px solid #c0381f;
                z-index: 10;
            }
            i {
                position: absolute;
                left: 50%;
                top: 50%;
                margin: -0.46rem 0 0 -0.06rem;

                border-width: 0.14rem 0.06rem;
                border-style: solid;
                border-color: transparent;
                border-bottom-color: #c0381f;
                transform-origin: 0.06rem 0.46rem; /* 设置旋转点 */
                z-index: 9;
            }
            .prize {
                .sector {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-top: -1.2rem;

                    width: 1.2rem;
                    height: 2.4rem;
                    overflow: hidden;
                    transform-origin: left center;
                    .sector-inner {
                        width: 0.8rem;
                        height: 1.2rem;
                        padding: 0.1rem 0.18rem 0 0.33rem;
                        transform: translate(-0.44rem, 0.12rem) rotate(36deg);
                        transform-origin: right center;
                        border-radius: 0.1rem 0 0 0.1rem;
                    }
                    span {
                        display: inline-block;

                        text-align: center;
                        transform-origin: center;
                        transform: rotate(-18deg);
                        color: #d46854;
                    }
                }
                .sector:nth-child(1) {
                    transform: rotate(-18deg);
                }
                .sector:nth-child(2) {
                    transform: rotate(18deg);
                }
                .sector:nth-child(3) {
                    transform: rotate(54deg);
                }
                .sector:nth-child(4) {
                    transform: rotate(90deg);
                }
                .sector:nth-child(5) {
                    transform: rotate(126deg);
                }
                .sector:nth-child(6) {
                    transform: rotate(162deg);
                }
                .sector:nth-child(7) {
                    transform: rotate(198deg);
                }
                .sector:nth-child(8) {
                    transform: rotate(234deg);
                }
                .sector:nth-child(9) {
                    transform: rotate(270deg);
                }
                .sector:nth-child(10) {
                    transform: rotate(306deg);
                }
                .sector:nth-child(2n+1) {
                    .sector-inner {
                        background: #fef6e0;
                    }
                }
                .sector:nth-child(2n) {
                    .sector-inner {
                        background: #ffffff;
                    }
                }
            }
        }
        .lamp {
            .light {
                position: absolute;
                height: 0.1rem;
                width: 0.1rem;
                border-radius: 50%;
                top: 0.1rem;
                left: 1.45rem;
                transform-origin: 0.05rem 1.4rem;
            }
            .light:nth-child(2n) {
                background-color: #fafce7;
            }
            .light:nth-child(2n+1) {
                background-color: #ffe58b;
            }
            .light:nth-child(2) {
                transform: rotate(36deg);
            }
            .light:nth-child(3) {
                transform: rotate(72deg);
            }
            .light:nth-child(4) {
                transform: rotate(108deg);
            }
            .light:nth-child(5) {
                transform: rotate(144deg);
            }
            .light:nth-child(6) {
                transform: rotate(180deg);
            }
            .light:nth-child(7) {
                transform: rotate(216deg);
            }
            .light:nth-child(8) {
                transform: rotate(252deg);
            }
            .light:nth-child(9) {
                transform: rotate(288deg);
            }
            .light:nth-child(10) {
                transform: rotate(324deg);
            }
        }
    }
}
</style>
