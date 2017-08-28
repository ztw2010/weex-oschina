import {
    COMMENT_LIST,
    COMMENT_REFRESH
} from '../mutations-type'

import * as api from '../../api/impl/comment-list-impl'
import {logger} from '../../utils/logger'

const state = {
    commentList: {
        commentList:[],
        notice: {}
    },
    option: {
        page: 1
    }
}

const mutations = {

    [COMMENT_LIST](state, data) {
        if(!(data === null || data === undefined) && data.commentList){
            state.option.page ++
            state.commentList = data
        } else {
            state.commentList = {
                commentList: [],
                notice: data.notice
            }
        }
    },

    [COMMENT_REFRESH](state, refresh){
        if (refresh) {
            state.option.page = 1
        }
        logger('content-comments-refresh', refresh)
    }
}

const actions = {

    getCommentList: ({commit}, data) => {
        console.log('getCommentList')
        let page = data.page
        if (page == 1){
            commit(COMMENT_REFRESH, true)
        } else{
            commit(COMMENT_REFRESH, false)
        }
        api.getCommentList(
            data.newsId,
            data.page,
            response => {
                commit(COMMENT_LIST, response)
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