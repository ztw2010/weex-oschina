import {
    MULTIPLE_MULTIPLENEWS,
    MULTIPLE_MULTIPLENEWS_REFRESH
} from '../mutations-type'

import * as api from '../../api/impl/multiple-multiplenews'
import {logger} from '../../utils/logger'

const state = {
    statuses: [],
    option: {
        refresh: false,
        page: 1
    }
}

const mutations = {

    [MULTIPLE_MULTIPLENEWS](state, data) {
        state.statuses = data
        state.option.page++
        logger('multiple_timeline', 'save store succeed !')
    },

    [MULTIPLE_MULTIPLENEWS_REFRESH](state, refresh) {
        if (refresh) {
            state.option.page = 1
        }
        state.option.refresh = refresh
        logger('multiple_refresh', state.option.refresh)
    }
}

const actions = {

    getMultipleMultipleNews: ({commit}, page) => {
        console.log('getMultipleMultipleNews')
        if (page == 1) {
            commit(MULTIPLE_MULTIPLENEWS_REFRESH, true)
        } else {
            commit(MULTIPLE_MULTIPLENEWS_REFRESH, false)
        }
        api.getMultipleMultipleNews(
            page,
            response => {
                commit(MULTIPLE_MULTIPLENEWS, response.newslist)
                commit(MULTIPLE_MULTIPLENEWS_REFRESH, false)
            },
            err => {
                console.log(err);
            }
        )
    }
}

export default {
    state,
    actions,
    mutations
}