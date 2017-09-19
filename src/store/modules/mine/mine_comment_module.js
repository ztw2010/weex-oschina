import {
    MINE_COMMENT
} from '../../mutations-type'

import * as api from '../../../api/impl/mine/at-me-impl'

const state = {
    statuses: [],
    page: 1
}

const mutations = {

    [MINE_COMMENT](state, obj) {
        if (obj.page === 1) {
            state.statuses = []
            state.page = 2
        } else {
            state.page++
        }
        state.statuses = obj.activelist
    }
}

const actions = {

    getMineCommentList: ({commit}, page) => {
        console.log('getMineCommentList')
        api.getMineCommentList(
            page,
            response => {
                commit(MINE_COMMENT, {'activelist': response.activelist, 'page': page})
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