import {
    MULTIPLE_SOFTUPDATENEWS
} from '../mutations-type'

import * as api from '../../api/impl/multiple-softupdatenews'
import {logger} from '../../utils/logger'

const state = {
    statuses: [],
    option: {
        page: 1
    }
}

const mutations = {

    [MULTIPLE_SOFTUPDATENEWS](state, data) {
        if(state.option.page === 1){
            state.statuses = []
        }
        state.statuses = data
        state.option.page++
        logger('multiple_timeline', 'save store succeed !')
    }
}

const actions = {

    getSoftUpdateNews: ({commit}, page) => {
        console.log('getMultipleTimeline')
        api.getSoftUpdateNews(
            page,
            response => {
                commit(MULTIPLE_SOFTUPDATENEWS, response.newslist)
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