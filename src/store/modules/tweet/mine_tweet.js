import {
    MINE_TWEET
} from '../../mutations-type'

import * as api from '../../../api/impl/tweet/tweet-impl'

const state = {
    statuses: [],
    option: {
        page: 1
    }
}

const mutations = {

    [MINE_TWEET](state, obj) {
        if (obj.page === 1) {
            state.statuses = []
            state.option.page = 2
        } else {
            state.option.page++
        }
        state.statuses = obj.activelist
    }
}

const actions = {

    getMineTweetList: ({commit}, page) => {
        console.log('getHotTweetList')
        api.getMineTweetList(
            page,
            response => {
                commit(MINE_TWEET, {'activelist': response.activelist, 'page': page})
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