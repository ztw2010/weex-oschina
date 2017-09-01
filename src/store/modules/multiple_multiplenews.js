import {
    MULTIPLE_MULTIPLENEWS
} from '../mutations-type'

import * as api from '../../api/impl/multiple-multiplenews'
import {logger} from '../../utils/logger'

const state = {
    statuses: [],
    option: {
        page: 1
    }
}

const mutations = {

    [MULTIPLE_MULTIPLENEWS](state, data) {
        if(state.option.page === 1){
            state.statuses = []
        }
        state.statuses = data
        state.option.page++
        logger('multiple_timeline', 'save store succeed !')
    }
}

const actions = {

    getMultipleMultipleNews: ({commit}, page) => {
        console.log('getMultipleMultipleNews')
        api.getMultipleMultipleNews(
            page,
            response => {
                commit(MULTIPLE_MULTIPLENEWS, response.newslist)
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