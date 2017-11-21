import {goAxios} from '../baseAxios';
import { HOST_CONCIG, KEY_CONFIG, API_ROUTER_CONFIG } from '../../config/api-config'
import { logger } from '../../../utils/logger'
import store from '../../../store/'

export const getSoftCategoryList = (categoryId, okCallback, errorCallback) => {

    let accesstoken = store.getters.token.access_token

    var request_data = {
        paramsObj: {
            access_token: accesstoken,
            tag: categoryId,
            dataType: 'json'
        },
        methodName: 'project_catalog_list'
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

export const getProjectList = (obj, okCallback, errorCallback) => {

    let accesstoken = store.getters.token.access_token

    var request_data = {
        paramsObj: {
            access_token: accesstoken,
            type: obj.type,
            page: obj.page,
            dataType: 'json'
        },
        methodName: 'project_list'
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

export const getProjectTagList = (obj, okCallback, errorCallback) => {

    let accesstoken = store.getters.token.access_token

    var request_data = {
        paramsObj: {
            access_token: accesstoken,
            tag: obj.tag,
            dataType: 'json'
        },
        methodName: 'project_tag_list'
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