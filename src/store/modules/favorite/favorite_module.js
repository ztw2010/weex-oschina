import {
    FAVORITE
} from '../../mutations-type'

import * as api from '../../../api/impl/favorite/favorite-impl'
import {logger} from '../../../utils/logger'

const state = {
    statuses: [],
    page: 1
}

const mutations = {

    [FAVORITE](state, obj) {
        if(obj.page === 1){
            state.statuses = []
            state.page = 2
        } else {
            state.page ++
        }
        state.statuses = obj.favoriteList
    }
}

const actions = {
    getFavoriteList: ({commit}, page) => {
        console.log('getFavoriteList')
        api.getFavoriteList(
            page,
            response => {
                commit(FAVORITE, {'favoriteList' : response.favoriteList, 'page' : page})
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