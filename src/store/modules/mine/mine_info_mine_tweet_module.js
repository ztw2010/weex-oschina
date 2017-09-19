import {
    MINE_INFO_MINE_TWEET
} from '../../mutations-type'

import * as api from '../../../api/impl/mine/mine-info-mine-tweet-impl'

const state = {
    statuses: [],
    page: 1
}

const mutations = {

    [MINE_INFO_MINE_TWEET](state, obj) {
        if (obj.page === 1) {
            state.statuses = []
            state.page = 2
        } else {
            state.page++
        }
        state.statuses = obj.activelist
        for (var key in state.statuses) {
            let value = state.statuses[key]
            if (value.tweetImage && value.tweetImage.length > 0 && value.tweetImage.indexOf(",") > 0) {
                var imgSmallArray = new Array();
                let imageArray = value.tweetImage.split(",");
                let firstImgUrl = imageArray[0]
                imgSmallArray.push(firstImgUrl)
                let lastIndex = firstImgUrl.indexOf("space") + "space/".length
                let preUrl = firstImgUrl.substring(0, lastIndex)
                for (let i = 1; i < imageArray.length; i++) {
                    imgSmallArray.push(preUrl + imageArray[i])
                }
                value.tweetImageList = imgSmallArray
            }
        }
    }
}

const actions = {

    getMineInfoMineTweetList: ({commit}, page) => {
        console.log('getMineInfoMineTweetList')
        api.getMineInfoMineTweetList(
            page,
            response => {
                commit(MINE_INFO_MINE_TWEET, {'activelist': response.activelist, 'page': page})
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