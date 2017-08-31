import {
    MULTIPLE_TIMELINE,
    MULTIPLE_REFRESH
} from '../mutations-type'

import * as api from '../../api/impl/multiple-timeline'
import {logger} from '../../utils/logger'

const state = {
    statuses: [],
    option: {
        refresh: false,
        page: 1
    }
}

const mutations = {

    [MULTIPLE_TIMELINE](state, data) {
        state.statuses = data
        state.option.page++
        logger('multiple_timeline', 'save store succeed !')
    },

    [MULTIPLE_REFRESH](state, refresh) {
        if (refresh) {
            state.option.page = 1
            state.option.statuses = []
        }
        logger('multiple_refresh', state.option.refresh)
    }
}

const actions = {

    getMultipleTimeline: ({commit}, page) => {
        console.log('getMultipleTimeline')
        if (page == 1){
            commit(MULTIPLE_REFRESH, true)
        } else{
            commit(MULTIPLE_REFRESH, false)
        }
        api.getMultipleTimeline(
            page,
            response => {
                if(response.newslist){
                    commit(MULTIPLE_TIMELINE, response.newslist)
                }
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