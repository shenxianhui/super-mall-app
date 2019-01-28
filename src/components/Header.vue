/*
 * @Author: ShenXianhui 
 * @Date: 2019-01-28 09:55:14 
 * @Last Modified by: ShenXianhui
 * @Last Modified time: 2019-01-28 10:27:14
 */
<!-- 标题栏 -->
<template>
    <div class="header">
        <div class="header-content">
            <!-- <div class="back" :class="rightBtn.isShow ? 'mr' : ''" @click="back()">
                <van-icon name="arrow-left" />
            </div> -->
            <div class="title">
                <span  v-if="isTitle">{{ title }}g</span>
                <input type="text" placeholder="lalalallala" readonly v-else @click="getSearchPage()">
            </div>
            <div class="other">
                <!-- <img src="@/images/icon/search.png" alt="图标"> -->
                <van-icon name="chat-o" />
                <van-icon name="ellipsis" />
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
        setBack: { // 自定义返回键功能 ? 自定义 : 默认
            type: Boolean,
            default: false
        },
        backURL: { // 返回 url
            type: String,
            default: ''
        },
        rightBtn: { // 右侧按钮 (默认不显示)
            type: Object,
            default: function () {
                isShow: false; // 是否显示
                number: 2; // 按钮数量 (最大为2)
                imgSrc: ''; // 图片地址 (按钮类型为img)
                iconName: ''; // 图标名称 (按钮类型为icon)
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
                    window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
                }
            }
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
        .back {
            display: flex;
            justify-content: left;
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
            input {
                width: 100%;
                height: 100%;
                border: none;
                padding: 0.05rem 0.1rem;
                border-radius: 0.02rem;
                color: #333;
                background-color: #fff;
            }
            span {
                font-size: 0.18rem;
                color: #fff;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .other {
            display: flex;
            align-items: center;
            justify-content: space-between;

            height: 100%;
            .van-icon {
                font-size: 0.2rem;
                color: #fff;
                margin-left: 0.1rem;
            }
            img {
                width: 0.18rem;
                height: 0.18rem;
                margin-left: 0.1rem;
            }
        }
    }
}
</style>
