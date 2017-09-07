import {
    MINE
} from '../../mutations-type'

import * as api from '../../../api/impl/mine/mine-impl'

const state = {
    mineInfo:{}
}

const mutations = {

    [MINE](state, mineInfo) {
        state.mineInfo = mineInfo
    }
}

const actions = {
    getMineInfo: ({commit}) => {
        console.log('getMineInfo')
        api.getMineInfo(
            response => {
                commit(MINE, response)
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