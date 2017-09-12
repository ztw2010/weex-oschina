import {goAxios} from './baseAxios';
import { HOST_CONCIG, API_ROUTER_CONFIG, DEBUG } from '../../api/config/api-config'
import { logger } from '../../utils/logger'
import store from '../../store/'

export const getNewsDetailContents = (newsId, newsType, newsUrl, okCallback, errorCallback) => {

    const accesstoken = store.getters.token.access_token

    var request_data = {
        paramsObj: {
            access_token: accesstoken,
            id: newsId,
            newsType: newsType,
            newsUrl: newsUrl,
            dataType: 'json'
        },
        methodName: 'getNewsDetail'
    }

    var config = {
        method: 'post',
        url: API_ROUTER_CONFIG.oauth_post,
        baseURL: HOST_CONCIG.host,
        data: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    goAxios(config, okCallback, errorCallback);
    // axios(config)
    //     .then(function (response) {
    //         logger("oauthPost-ok", 'getNewsDetailContent response succeed')
    //         okCallback(response.data)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         errorCallback(error)
    //     })
}

export const pubComment = (blogId, commentContents, okCallback, errorCallback) => {

    const accesstoken = store.getters.token.access_token

    var request_data = {
        paramsObj: {
            access_token: accesstoken,
            blog: blogId,
            content: commentContents,
            dataType: 'json'
        },
        methodName: 'pubComment'
    }

    var config = {
        method: 'post',
        url: API_ROUTER_CONFIG.oauth_post,
        baseURL: HOST_CONCIG.host,
        data: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    goAxios(config, okCallback, errorCallback);
    // axios(config)
    //     .then(function (response) {
    //         logger("oauthPost-ok", 'pubComment response succeed')
    //         okCallback(response.data)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         errorCallback(error)
    //     })
}