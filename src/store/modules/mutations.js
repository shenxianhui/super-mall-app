export default {
    setGoods(state, payload) { // 商品信息
        Object.assign(state.goods, payload); // payload 对象 以键值对方式传入, 会覆盖/添加前面的 state.OrderLook 对象
    },
    setGoodsList(state, payload) { // 商品列表
        state.goodsList.push(payload);
    }
    // setTest(state, payload) {
    //     state.test = payload;
    // }
};
