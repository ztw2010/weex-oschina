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

    [MULTIPLE_MULTIPLENEWS](state, obj) {
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

    getMultipleMultipleNews: ({commit}, page) => {
        console.log('getMultipleMultipleNews')
        api.getMultipleMultipleNews(
            page,
            response => {
                commit(MULTIPLE_MULTIPLENEWS, {'newslist' : response.newslist, 'page' : page})
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