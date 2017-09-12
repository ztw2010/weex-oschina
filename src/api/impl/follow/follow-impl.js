import {goAxios} from '../baseAxios';
import { HOST_CONCIG, API_ROUTER_CONFIG, DEBUG } from '../../config/api-config'
import { logger } from '../../../utils/logger'
import store from '../../../store/'

export const getFollowList = (page, okCallback, errorCallback) => {

    const accesstoken = store.getters.token.access_token

    let relation = store.getters.follow_type

    var request_data = {
        paramsObj: {
            access_token: accesstoken,
            relation: relation,
            pageSize: 20,
            page: page,
            dataType: 'json'
        },
        methodName: 'getFollowList'
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