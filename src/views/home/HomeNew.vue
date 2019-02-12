/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 17:56:16 
 * @Last Modified by: ShenXianhui
 * @Last Modified time: 2019-02-12 15:08:30
 */
<!-- 主页-新品 -->
<template>
    <div class="home-new">
        <div class="phone">
            <h1 :class="isShow ? 'mi-title-show' : ''"><span>小米</span> 让生活更精彩</h1>
            <img
                class="mi-phone"
                :class="isShow ? 'mi-phone-show' : ''"
                src="@/images/common/mi_phone_nobg.png"
                alt="手机">
            <img
                class="mi-shadow"
                :class="isShow ? 'mi-shadow-show' : ''"
                src="@/images/common/mi_phone_nobg_shadow.png"
                alt="阴影">
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeNew',
    components: {},
    props: {},
    data() {
        return {
            isShow: false // 显示图片
        };
    },
    computed: {},
    watch: {},
    created() {
        setInterval(() => {
            this.isShow = true;
        }, 100)
    },
    methods: {}
};
</script>

<style scoped lang='less'>
.home-new {
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, #e6e6e6, #f0f0f0, #e6e6e6);
    padding: 0 0.1rem;
    .phone {
        position: relative;

        width: 100%;
        height: 100%;
        h1 {
            position: absolute;
            top: 0.8rem;

            width: 100%;
            text-align: center;
            font-size: 0.35rem;
            opacity: 0;
            transform: scale(0);
            span {
                color: #ff6700;
            }
        }
        .mi-title-show {
            opacity: 1;
            transform: scale(1);
            transition: all 1s;
        }
        .mi-phone {
            position: absolute;
            top: 2.5rem;
            left: 50%;
            transform: translate(-50%, -150%);

            width: 98%;
            opacity: 0;
            z-index: 1;
        }
        .mi-phone-show {
            transform: translate(-50%, 0);
            opacity: 1;
            transition: all 1s;
        }
        .mi-shadow {
            position: absolute;
            top: 3rem;
            left: 50%;
            transform: translate(-50%, 120%);
            opacity: 0;

            width: 98%;
        }
        .mi-shadow-show {
            transform: translate(-50%, 0);
            opacity: 1;
            transition: all 1s;
        }
    }
}
</style>
