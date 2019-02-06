/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 09:18:33 
 * @Last Modified by: Shen Xianhui
 * @Last Modified time: 2019-01-27 11:22:31
 */
<!-- 我的 -->
<template>
    <div class="account">
        <!-- 标题栏 -->
        <Header
            :isTitle="true"
            title="个人中心"
            :isScan="false"
            :isBack="false"
            :rightBtn="rightBtn"
            @handleIcon="handleIcon">
        </Header>
        我的
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
    name: 'Account',
    components: {
        Header
    },
    props: {},
    data() {
        return {
            // 右侧按钮
            rightBtn: {
                number: 2,
                iconName: [
                    'setting-o',
                    'chat-o'
                ]
            }
        };
    },
    computed: {},
    watch: {},
    created() {},
    methods: {
        // 右侧按钮
        handleIcon(obj) {
            if (obj.index === 0) {
                console.log('设置');
            } else {
                console.log('消息');
            }
        }
    }
};
</script>

<style scoped lang='less'>
.account {
    width: 100%;
    height: 100%;
    padding-top: 0.42rem;
}
</style>
