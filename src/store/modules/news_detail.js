import {
    NEWS_DETAILED,
    PUB_COMMENT_RESULT
} from '../mutations-type'

import * as api from '../../api/impl/news-detail-impl'
import {logger} from '../../utils/logger'

const state = {
    newscontent: {

    },
    pubCommentResult:{

    }
}

const mutations = {

    [NEWS_DETAILED](state, data) {
        state.newscontent = data
    },
    [PUB_COMMENT_RESULT](state, data){
        state.pubCommentResult = data
    }
}

const actions = {

    getNewsDetailContent: ({commit}, newsId) => {
        console.log('getNewsDetailContent')
        api.getNewsDetailContents(
            newsId,
            response => {
                commit(NEWS_DETAILED, response)
            },
            err => {
                console.log(err);
            }
        )
    },
    pubCommnet: ({commit}, blogId, commentContents) => {
        console.log('pubCommnet')
        api.pubComment(
            blogId,
            commentContents,
            response => {
                commit(PUB_COMMENT_RESULT, response)
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