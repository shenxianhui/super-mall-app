/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 11:16:28 
 * @Last Modified by: Shen Xianhui
 * @Last Modified time: 2019-01-27 17:35:42
 */
<!-- Home 主页 -->
<template>
    <div class="main-home">
        <Tab></Tab>
        <!-- <router-view></router-view> -->
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
.main-home {
    width: 100%;
    height: 100%;
}
</style>
