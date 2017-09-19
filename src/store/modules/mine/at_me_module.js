import {
    AT_ME
} from '../../mutations-type'

import * as api from '../../../api/impl/mine/at-me-impl'

const state = {
    statuses: [],
    page: 1
}

const mutations = {

    [AT_ME](state, obj) {
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

    getAtMeList: ({commit}, page) => {
        console.log('getAtMeList')
        api.getAtMeList(
            page,
            response => {
                commit(AT_ME, {'activelist': response.activelist, 'page': page})
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