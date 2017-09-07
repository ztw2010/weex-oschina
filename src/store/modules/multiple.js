/*
*
* 用来保存tab页，从动弹页或者发现页或者我的页切换回综合页时去显示对应的tab
*
* */
import {
    UPDATE_TAB_PAGE
} from '../mutations-type'

const state = {
    tabPage: {
        'multiple': '',
        'tweet': ''
    }
}

const mutations = {
    [UPDATE_TAB_PAGE](state, obj) {
        switch (obj.moduleName){
            case 'multiple':
                state.tabPage.multiple = obj.tabName
                break;
            case 'tweet':
                state.tabPage.tweet = obj.tabName
                break;
        }
    }
}

const actions = {
    updateTabPage: ({ commit }, obj) => {
        commit(UPDATE_TAB_PAGE, obj)
    }
}

export default {
    state,
    actions,
    mutations
}