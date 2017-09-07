import {goAxios} from '../baseAxios';
import { HOST_CONCIG, KEY_CONFIG, API_ROUTER_CONFIG } from '../../config/api-config'
import { logger } from '../../../utils/logger'
import store from '../../../store/'

export const getMineInfo = (okCallback, errorCallback) => {
    const accesstoken = store.getters.token.access_token
    var oauthData = {
        paramsObj: {
            access_token: accesstoken,
            dataType: 'json'
        },
        methodName: 'getMineInfo'
    }

    var config = {
        method: 'post',
        url: API_ROUTER_CONFIG.oauth_post,
        baseURL: HOST_CONCIG.host,
        data: oauthData,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    goAxios(config, okCallback, errorCallback);
}