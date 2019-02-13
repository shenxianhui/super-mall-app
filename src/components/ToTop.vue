/*
 * @Author: ShenXianhui 
 * @Date: 2019-01-30 14:17:27 
 * @Last Modified by: ShenXianhui
 * @Last Modified time: 2019-02-13 09:08:25
 */
<!-- 回到顶部 -->
<template>
    <div class="to-top">
        <van-icon name="arrow-up" @click="toTop()" />
    </div>
</template>

<script>
export default {
    name: 'ToTop',
    methods: {
        // 回到顶部
        toTop () {
            this.$emit('toTop');
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
