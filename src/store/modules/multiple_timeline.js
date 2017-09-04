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

    [MULTIPLE_TIMELINE](state, obj) {
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

    getMultipleTimeline: ({commit}, page) => {
        console.log('getMultipleTimeline')
        api.getMultipleTimeline(
            page,
            response => {
                if(response.newslist){
                    commit(MULTIPLE_TIMELINE, {'newslist' : response.newslist, 'page' : page})
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