import {goAxios} from './baseAxios';
import { HOST_CONCIG, KEY_CONFIG, API_ROUTER_CONFIG } from '../../api/config/api-config'
import { logger } from '../../utils/logger'

export const oauthPost = (code, okCallback, errorCallback) => {
    var oauthData = {
        paramsObj: {
            client_id: KEY_CONFIG.app_key,
            client_secret: KEY_CONFIG.app_secret,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: KEY_CONFIG.redirect_uri,
            dataType: 'json'
        },
        methodName: 'getToken'
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
    // axios(config)
    //     .then(function (response) {
    //         logger("oauthPost-ok", 'oauthPost response succeed')
    //         okCallback(response)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         errorCallback(error)
    //     })
}