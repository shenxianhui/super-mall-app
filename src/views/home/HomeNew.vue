/*
 * @Author: Shen Xianhui 
 * @Date: 2019-01-27 17:56:16 
 * @Last Modified by: Shen Xianhui
 * @Last Modified time: 2019-01-27 19:04:18
 */
<!-- 主页-新品 -->
<template>
    <div class="home-new">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad">
            <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
    </div>
</template>

<script>
export default {
    name: 'HomeNew',
    components: {},
    props: {},
    data() {
        return {
            loading: false, // 加载中
            finished: false, // 加载完成

            list: [] // 内容
        };
    },
    computed: {},
    watch: {},
    created() {},
    methods: {
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 500);
        }
    }
};
</script>

<style scoped lang='less'>
.home-new {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 0 0.1rem;
    overflow: auto;
}
</style>
