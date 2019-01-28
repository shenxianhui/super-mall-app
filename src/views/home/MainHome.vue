/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 11:16:28 
 * @Last Modified by: ShenXianhui
 * @Last Modified time: 2019-01-28 10:05:16
 */
<!-- Home 主页 -->
<template>
    <div class="main-home">
        <Header></Header>
        <Tab></Tab>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import Header from '@/components/Header'
import Tab from '@/components/Tab'

export default {
    name: 'MainHome',
    components: {
        Tab,
        Header
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
    padding-top: 0.42rem;
}
</style>
