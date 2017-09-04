import {
    RECENT_TWEET
} from '../../mutations-type'

import * as api from '../../../api/impl/tweet/tweet-impl'
import {logger} from '../../../utils/logger'

const state = {
    statuses: [],
    option: {
        page: 1
    }
}

const mutations = {

    [RECENT_TWEET](state, obj) {
        if(obj.page === 1){
            state.statuses = []
            state.option.page = 2
        } else {
            state.option.page ++
        }
        state.statuses = obj.tweetlist
        logger('multiple_timeline', 'save store succeed !')
    }
}

const actions = {

    getRecentTweetList: ({commit}, page) => {
        console.log('getRecentTweetList')
        api.getTweetList(
            page,
            response => {
                commit(RECENT_TWEET, {'tweetlist' : response.tweetlist, 'page' : page})
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