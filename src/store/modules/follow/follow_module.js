import {
    FOLLOW,
    UPDATE_FOLLOW_TYPE
} from '../../mutations-type'

import * as api from '../../../api/impl/follow/follow-impl'
import {logger} from '../../../utils/logger'

const state = {
    statuses: [],
    page: 1,
    type: 0
}

const mutations = {

    [FOLLOW](state, obj) {
        if(obj.page === 1){
            state.statuses = []
            state.page = 2
        } else {
            state.page ++
        }
        if(obj.userList && obj.userList.length > 0){
            for (var key in obj.userList) {
                let value = obj.userList[key]
                let expertise = value.expertise
                if (expertise && expertise.length > 0) {
                    let newExpertise = expertise.substring(1, expertise.length - 1)
                    value.expertise = newExpertise
                }
            }
        }
        state.statuses = obj.userList
    },

    [UPDATE_FOLLOW_TYPE](state, type) {
        state.type = type
    }
}

const actions = {
    getFollowList: ({commit}, page) => {
        console.log('getFollowList')
        api.getFollowList(
            page,
            response => {
                commit(FOLLOW, {'userList' : response.userList, 'page' : page})
            },
            err => {
                console.log(err);
            }
        )
    },

    updateType: ({commit}, type) => {
        console.log('updateType')
        commit(UPDATE_FOLLOW_TYPE, type)
    }
}

export default {
    state,
    actions,
    mutations
}