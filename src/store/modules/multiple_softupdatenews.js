import {
    MULTIPLE_SOFTUPDATENEWS,
    MULTIPLE_SOFTUPDATE_REFRESH
} from '../mutations-type'

import * as api from '../../api/impl/multiple-softupdatenews'
import {logger} from '../../utils/logger'

const state = {
    statuses: [],
    option: {
        refresh: false,
        page: 1
    }
}

const mutations = {

    [MULTIPLE_SOFTUPDATENEWS](state, data) {
        state.statuses = data
        state.option.page++
        logger('multiple_timeline', 'save store succeed !')
    },

    [MULTIPLE_SOFTUPDATE_REFRESH](state, refresh) {
        if (refresh) {
            state.option.page = 1
        }
        state.option.refresh = refresh
        logger('multiple_refresh', state.option.refresh)
    }
}

const actions = {

    getSoftUpdateNews: ({commit}, page) => {
        console.log('getMultipleTimeline')
        if (page == 1) {
            commit(MULTIPLE_SOFTUPDATE_REFRESH, true)
        } else {
            commit(MULTIPLE_SOFTUPDATE_REFRESH, false)
        }
        api.getSoftUpdateNews(
            page,
            response => {
                commit(MULTIPLE_SOFTUPDATENEWS, response.newslist)
                commit(MULTIPLE_SOFTUPDATE_REFRESH, false)
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