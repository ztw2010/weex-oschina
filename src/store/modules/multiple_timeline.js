import {
    MULTIPLE_TIMELINE
} from '../mutations-type'

import * as api from '../../api/impl/multiple-timeline'
import {logger} from '../../utils/logger'

const state = {
    statuses: [],
    option: {
        page: 1
    }
}

const mutations = {

    [MULTIPLE_TIMELINE](state, data) {
        if(state.option.page === 1){
            state.statuses = []
        }
        state.statuses = data
        state.option.page++
        logger('multiple_timeline', 'save store succeed !')
    }
}

const actions = {

    getMultipleTimeline: ({commit}, page) => {
        console.log('getMultipleTimeline')
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