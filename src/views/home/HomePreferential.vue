/*
 * @Author: Shen Xianhui
 * @Date: 2019-01-27 17:57:57
 * @Last Modified by: ShenXianhui
 * @Last Modified time: 2019-02-13 09:10:01
 */
<!-- 首页-优惠 -->
<template>
    <div class="home-preferential">
        <!-- 抽奖-转盘 -->
        <LotteryTurntable></LotteryTurntable>
    </div>
</template>

<script>
import LotteryTurntable from '@/components/LotteryTurntable';

export default {
    name: 'HomePreferential',
    components: {
        LotteryTurntable
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

</style>
