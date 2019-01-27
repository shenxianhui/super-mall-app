/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 11:16:28 
 * @Last Modified by: Shen Xianhui
 * @Last Modified time: 2019-01-27 11:24:46
 */
<!-- Home 主页 -->
<template>
    <div class="main-home">
        <router-view></router-view>
        <Tab></Tab>
    </div>
</template>

<script>
import Tab from '@/components/Tab'

export default {
    name: 'MainHome',
    components: {
        Tab
    },
    props: {},
    data() {
        return {};
    },
    computed: {},
    watch: {},
    created() {},
    methods: {}
};
</script>

<style scoped lang='less'>
.main {
    width: 100%;
    height: 100%;
}
</style>
