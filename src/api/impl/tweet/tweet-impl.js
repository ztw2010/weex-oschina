import {goAxios} from '../baseAxios';
import { HOST_CONCIG, API_ROUTER_CONFIG, DEBUG } from '../../../api/config/api-config'
import store from '../../../store/'

export const getTweetList = (page, okCallback, errorCallback) => {

    const accesstoken = store.getters.token.access_token

    var request_data = {
        paramsObj: {
            access_token: accesstoken,
            user: 0,
            pageSize: 20,
            pageIndex: page,
            dataType: 'json'
        },
        methodName: 'getTweetList'
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
}

export const getHotTweetList = (page, okCallback, errorCallback) => {

    const accesstoken = store.getters.token.access_token

    var request_data = {
        paramsObj: {
            access_token: accesstoken,
            user: -1,
            pageSize: 20,
            pageIndex: page,
            dataType: 'json'
        },
        methodName: 'getTweetList'
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
}

export const getTweetMineTweetList = (page, okCallback, errorCallback) => {

    const accesstoken = store.getters.token.access_token

    let user = store.getters.token.uid

    var request_data = {
        paramsObj: {
            access_token: accesstoken,
            user: user,
            pageSize: 20,
            pageIndex: page,
            dataType: 'json'
        },
        methodName: 'getTweetList'
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
}