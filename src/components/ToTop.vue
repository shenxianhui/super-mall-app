/*
 * @Author: ShenXianhui 
 * @Date: 2019-01-30 14:17:27 
 * @Last Modified by: ShenXianhui
 * @Last Modified time: 2019-01-30 16:47:11
 */
<!-- 回到顶部 -->
<template>
    <div class="to-top">
        <van-icon name="arrow-up" @click="toTop($event)" />
    </div>
</template>

<script>
export default {
    name: 'ToTop',
    components: {},
    props: {
        scrollParam: {
            type: Object,
            default () {
                return {
                    way: 0, // 回到顶部的方式: 0 立即回到顶部; 1 匀速回到顶部
                    distance: 20, // 滚动多少像素显示图标
                    time: 600, // 向上滚动时长
                }
            }
        },
        distance: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {};
    },
    computed: {},
    watch: {
        distance(val) {
            console.log(val);
        }
    },
    created() {
        
    },
    methods: {
        // 回到顶部
        toTop (e) {
            // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            console.log();
        }
    }
};
</script>

<style scoped lang='less'>
.to-top {
    position: fixed;
    right: 0.2rem;
    bottom: 0.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 0.5rem;
    height: 0.5rem;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #eee;
    opacity: 0.9;
    
    z-index: 999;
    .van-icon {
        font-size: 0.3rem;
        color: #666;
    }
}
</style>
