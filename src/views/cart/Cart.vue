/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 09:17:47 
 * @Last Modified by: Shen Xianhui
 * @Last Modified time: 2019-01-27 11:22:39
 */
<!-- 购物车 -->
<template>
    <div class="cart">
        <Header
            :isTitle="true"
            title="购物车"
            titleIcon="location"
            :isScan="false"
            :isBack="false"
            :rightBtn="rightBtn"
            @handleTitle="handleTitle"
            @handleIcon="handleIcon">
        </Header>
        购物车
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
    name: 'Cart',
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
        },

        // 标题按钮
        handleTitle() {
            console.log('选择收货地址');
        }
    }
};
</script>

<style scoped lang='less'>
.cart {
    width: 100%;
    height: 100%;
    padding-top: 0.42rem;
}
</style>
