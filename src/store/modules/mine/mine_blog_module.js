import {
    MINE_BLOG
} from '../../mutations-type'

import * as api from '../../../api/impl/mine/mine-blog-impl'

const state = {
    statuses: [],
    page: 1
}

const mutations = {

    [MINE_BLOG](state, obj) {
        if (obj.page === 1) {
            state.statuses = []
            state.page = 2
        } else {
            state.page++
        }
        state.statuses = obj.projectlist
    }
}

const actions = {

    getMineBlogList: ({commit}, page) => {
        console.log('getMineBlogList')
        api.getMineBlogList(
            page,
            response => {
                commit(MINE_BLOG, {'projectlist': response.projectlist, 'page': page})
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