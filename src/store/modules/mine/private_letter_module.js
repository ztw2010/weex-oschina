import {
    PRIVATE_LETTER
} from '../../mutations-type'

import * as api from '../../../api/impl/mine/private-letter-impl'

const state = {
    statuses: [],
    page: 1
}

const mutations = {

    [PRIVATE_LETTER](state, obj) {
        if (obj.page === 1) {
            state.statuses = []
            state.page = 2
        } else {
            state.page++
        }
        state.statuses = obj.messageList
    }
}

const actions = {

    getPrivateLetterList: ({commit}, page) => {
        console.log('getPrivateLetterList')
        api.getPrivateLetterList(
            page,
            response => {
                commit(PRIVATE_LETTER, {'messageList': response.messageList, 'page': page})
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