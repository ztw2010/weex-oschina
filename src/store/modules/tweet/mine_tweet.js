import {
    MINE_TWEET
} from '../../mutations-type'

import * as api from '../../../api/impl/tweet/tweet-impl'

const state = {
    statuses: [],
    page: 1
}

const mutations = {

    [MINE_TWEET](state, obj) {
        if (obj.page === 1) {
            state.statuses = []
            state.page = 2
        } else {
            state.page++
        }
        state.statuses = obj.tweetlist
        for (var key in state.statuses) {
            let value = state.statuses[key]
            if (value.imgSmall && value.imgSmall.length > 0 && value.imgSmall.indexOf(",") > 0) {
                var imgSmallArray = new Array();
                let imageArray = value.imgSmall.split(",");
                let firstImgUrl = imageArray[0]
                imgSmallArray.push(firstImgUrl)
                let lastIndex = firstImgUrl.indexOf("space") + "space/".length
                let preUrl = firstImgUrl.substring(0, lastIndex)
                for (let i = 1; i < imageArray.length; i++) {
                    imgSmallArray.push(preUrl + imageArray[i])
                }
                value.imgSmallList = imgSmallArray
            }
        }
    }
}

const actions = {

    getTweetMineTweetList: ({commit}, page) => {
        console.log('getTweetMineTweetList')
        api.getTweetMineTweetList(
            page,
            response => {
                commit(MINE_TWEET, {'tweetlist': response.tweetlist, 'page': page})
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