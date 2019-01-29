/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 09:16:12 
 * @Last Modified by: Shen Xianhui
 * @Last Modified time: 2019-01-27 11:22:40
 */
<!-- 分类 -->
<template>
    <div class="categories">
        <Header
            :isTitle="false"
            :placeholder="placeholder"
            :isScan="true"
            :isBack="false"
            :rightBtn="rightBtn"
            @handleIcon="handleIcon">
        </Header>
        分类
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
    name: 'Categories',
    components: {
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
.categories {
    width: 100%;
    height: 100%;
    padding-top: 0.42rem;
}
</style>
