import {goAxios} from '../baseAxios';
import { HOST_CONCIG, KEY_CONFIG, API_ROUTER_CONFIG } from '../../config/api-config'
import { logger } from '../../../utils/logger'
import store from '../../../store/'

export const getAtMeList = (page, okCallback, errorCallback) => {

    let accesstoken = store.getters.token.access_token

    let userId = store.getters.token.uid

    var request_data = {
        paramsObj: {
            access_token: accesstoken,
            catalog: 2,
            user: userId,
            pageSize: 20,
            page: page,
            dataType: 'json'
        },
        methodName: 'active_list'
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

export const getMineCommentList = (page, okCallback, errorCallback) => {

    let accesstoken = store.getters.token.access_token

    let userId = store.getters.token.uid

    var request_data = {
        paramsObj: {
            access_token: accesstoken,
            catalog: 3,
            user: userId,
            pageSize: 20,
            page: page,
            dataType: 'json'
        },
        methodName: 'active_list'
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