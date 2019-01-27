/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-26 22:55:24 
 * @Last Modified by: Shen Xianhui
 * @Last Modified time: 2019-01-26 22:56:57
 */
<!-- 主页 -->
<template>
    <div class="main-content">
        <!-- <BaseTab></BaseTab> -->
        <router-view></router-view>
    </div>
</template>

<script>
    // import BaseTab from '@/components/common/BaseTab.vue'

    export default {
        name: 'mainContent',
        components: {
            // BaseTab
        }
    }
</script>

<style scoped lang='less'>
    .main-content {
        width: 100%;
        height: 100%;
    }
</style>