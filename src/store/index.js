import Vue from 'vue';
import Vuex from 'vuex';
import state from './modules/state';
import mutations from './modules/mutations';
import actions from './modules/actions';

// 启用Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
});