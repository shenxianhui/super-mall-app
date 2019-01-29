/*
 * @Author: ShenXianhui 
 * @Date: 2019-01-28 09:55:14 
 * @Last Modified by: Shen Xianhui
 * @Last Modified time: 2019-01-28 22:48:07
 */
<!-- 标题栏 -->
<template>
    <div class="header">
        <div class="header-content">
            <span v-if="!(isBack || isScan)" :class="rightBtn.number === 1 ? 'blank' : 'blank-double'"></span>
            <div
                v-if="isScan"
                class="left-icon"
                :class="rightBtn.number === 2 ? 'mr' : ''"
                @click="scan">
                <van-icon name="scan" />
            </div>
            <div
                v-if="isBack"
                class="left-icon"
                :class="rightBtn.number === 2 ? 'mr' : ''"
                @click="back">
                <van-icon name="arrow-left" />
            </div>
            <div class="title">
                <div v-if="isTitle" class="title-content" @click="handleTitle">
                    <span :class="(titleImg || titleIcon) ? 'title-text' : ''">{{ title }}</span>
                    <img v-if="titleImg" :src="titleImg" alt="icon">
                    <van-icon v-if="titleIcon" :name="titleIcon" />
                </div>
                <input  v-if="!isTitle" type="text" :placeholder="placeholder" readonly @click="getSearchPage">
                <img  v-if="!isTitle" src="@/images/icon/search.png" alt="搜索">
            </div>
            <div class="other">
                <span
                    class="blank"
                    v-if="!((rightBtn.imgSrc && rightBtn.imgSrc.length)
                        || (rightBtn.iconName && rightBtn.iconName.length)
                        || rightBtn.textValue)">
                </span>
                <img
                    v-for="(item, index) in rightBtn.imgSrc"
                    :key="item.id"
                    :src="item"
                    alt="icon"
                    @click="handleImg(index)">
                <van-icon
                    v-for="(item, index) in rightBtn.iconName"
                    :key="item.id"
                    :name="item"
                    @click="handleIcon(index)" />
                <p v-if="rightBtn.textValue" @click="handleText()">
                    {{ rightBtn.textValue }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    components: {},
    props: {
        isTitle: { // 标题 ? 标题 : 输入框
            type: Boolean,
            default: true
        },
        title: { // 标题内容
            type: String,
            default: ''
        },
        titleImg: { // 标题右侧小图标 (img), 格式: require('src')
            type: String,
            default: ''
        },
        titleIcon: { // 标题右侧小图标 (icon)
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        isScan: { // 显示左侧扫描
            type: Boolean,
            default: false
        },
        isBack: { // 显示左侧返回键
            type: Boolean,
            default: true
        },
        setBack: { // 自定义返回键功能 ? 自定义 : 默认
            type: Boolean,
            default: false
        },
        backURL: { // 返回 url
            type: String,
            default: ''
        },
        // leftBtn: { // 左侧按钮, 不传不显示, 最多显示一个
        //     type: Object,
        //     default: function () {
        //         return {
        //             imgSrc: '', // 选填, 图片地址 (按钮类型为img), 格式: require('src')
        //             iconName: '' // 选填, 图标名称 (按钮类型为icon)
        //         }
        //     }
        // },
        rightBtn: { // 右侧按钮, 不传不显示
            type: Object,
            default: function () {
                return {
                    number: 1, // 按钮数量 (最大为2)
                    imgSrc: [ // 选填, 图片地址 (按钮类型为img)
                        // require('@/images/icon/search.png'),
                        // require('@/images/icon/search.png')
                    ],
                    iconName: [ // 选填, 图标名称 (按钮类型为icon)
                        // 'chat-o',
                        // 'ellipsis'
                    ],
                    textValue: '' // 选填, 文字 (建议两个汉字)
                }
            }
        }
    },
    data() {
        return {};
    },
    computed: {},
    watch: {},
    created() {},
    methods: {
        // 搜索框
        getSearchPage() {
            console.log('进入搜索页');
        },

        // 返回
        back() {
            if (this.setBack) {
                this.$emit('back');
            } else {
                if (this.backURL) {
                    // this.$router.push(this.backURL);
                    this.$router.replace(this.backURL);
                } else {
                    // console.log(window.history.length);
                    window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
                }
            }
        },

        // 扫描
        scan() {
            console.log('打开摄像机');
        },

        // 右侧按钮-img
        handleImg(index) {
            this.$emit('handleImg', {
                index: index
            });
        },

        // 右侧按钮-icon
        handleIcon(index) {
            this.$emit('handleIcon', {
                index: index
            });
        },

        //右侧按钮-text
        handleText(index) {
            this.$emit('handleText');
        },

        // 标题按钮
        handleTitle() {
            this.$emit('handleTitle');
        }
    }
};
</script>

<style scoped lang='less'>
.header {
    position: fixed;
    top: 0;

    width: 100%;
    height: 0.42rem;
    padding: 0.07rem 0.1rem;
    background: #ff6700;
    .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 100%;
        .left-icon {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 0.36rem;
            height: 100%;
            .van-icon {
                font-size: 0.2rem;
                color: #fff;
            }
        }
        .mr {
            margin-right: 0.3rem;
        }
        .title {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 100%;
            max-width: 3rem;
            padding: 0 0.1rem;
            .title-content {
                display: flex;
                align-items: center;
                justify-content: center;
                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    font-size: 0.18rem;
                    color: #fff;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                img {
                    width: 0.14rem;
                    height: 0.14rem;
                    margin-top: 0.02rem;
                }
                .van-icon {
                    color: #fff;
                    margin-top: 0.02rem;
                }
                .title-text {
                    margin: 0 0.03rem 0 0.2rem;
                }
            }
            input {
                width: 100%;
                height: 100%;
                border: none;
                padding: 0.05rem 0.1rem 0.05rem 0.3rem;
                border-radius: 0.02rem;
                color: #333;
                background-color: #fff;
            }
            > img {
                position: absolute;
                left: 0.6rem;
                width: 0.14rem;
                height: 0.14rem;
            }
        }
        .other {
            display: flex;
            align-items: center;
            justify-content: space-between;

            height: 100%;
            img {
                width: 0.18rem;
                height: 0.18rem;
                margin-left: 0.1rem;
            }
            .van-icon {
                font-size: 0.2rem;
                color: #fff;
                margin-left: 0.1rem;
            }
            p {
                min-width: 0.4rem;
                font-size: 0.18rem;
                color: #fff;
                text-align: center;
            }
        }
    }

    .blank {
        width: 0.3rem;
    }
    .blank-double {
        width: 0.8rem;
    }
}
</style>
