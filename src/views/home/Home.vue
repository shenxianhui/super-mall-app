/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 11:16:28 
 * @Last Modified by: Shen Xianhui
 * @Last Modified time: 2019-01-28 22:47:15
 */
<!-- 首页 -->
<template>
    <div class="main-home">
        <!-- 标题栏 -->
        <Header
            :isTitle="false"
            :placeholder="placeholder"
            :isScan="true"
            :isBack="false"
            :rightBtn="rightBtn"
            @handleIcon="handleIcon">
        </Header>
        <!-- 顶部tab -->
        <Tab></Tab>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import Header from '@/components/Header';
import Tab from '@/components/Tab';

export default {
    name: 'Home',
    components: {
        Tab,
        Header
    },
    props: {},
    data() {
        return {
            placeholder: '请输入内容', // 搜索框提示

            rightBtn: { // header 右侧按钮
                number: 1, // 按钮数量
                iconName: ['chat-o']
            }
        };
    },
    computed: {},
    watch: {},
    created() {},
    methods: {
        // 右侧按钮
        handleIcon() {
            console.log('消息中心');
        }
    }
};
</script>

<style scoped lang='less'>
.main-home {
    width: 100%;
    height: 100%;
    padding-top: 0.42rem;
}
</style>
