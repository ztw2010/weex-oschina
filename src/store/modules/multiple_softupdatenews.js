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

    [MULTIPLE_SOFTUPDATENEWS](state, obj) {
        if(obj.page === 1){
            state.statuses = []
            state.option.page = 2
        } else {
            state.option.page ++
        }
        state.statuses = obj.newslist
        logger('multiple_timeline', 'save store succeed !')
    }
}

const actions = {

    getSoftUpdateNews: ({commit}, page) => {
        console.log('getMultipleTimeline')
        api.getSoftUpdateNews(
            page,
            response => {
                commit(MULTIPLE_SOFTUPDATENEWS, {'newslist' : response.newslist, 'page' : page})
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