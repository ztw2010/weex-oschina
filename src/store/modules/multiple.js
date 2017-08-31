/*
*
* 用来保存tab页，从动弹页或者发现页或者我的页切换回综合页时去显示对应的tab
*
* */
import {
    UPDATE_TAB_PAGE
} from '../mutations-type'

const state = {
    tabPage: ''
}

const mutations = {
    [UPDATE_TAB_PAGE](state, tabPage) {
        state.tabPage = tabPage
    }
}

const actions = {
    updateTabPage: ({ commit }, tabPage) => {
        commit(UPDATE_TAB_PAGE, tabPage)
    }
}

export default {
    state,
    actions,
    mutations
}