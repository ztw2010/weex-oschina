import {goAxios} from './baseAxios';
import { HOST_CONCIG, API_ROUTER_CONFIG, DEBUG } from '../../api/config/api-config'
import { logger } from '../../utils/logger'
import store from '../../store/'

export const getSoftUpdateNews = (page, okCallback, errorCallback) => {

    const accesstoken = store.getters.token.access_token

    var request_data = {
        paramsObj: {
            access_token: accesstoken,
            catalog: 3,
            pageSize: 30,
            page: page,
            dataType: 'json'
        },
        methodName: 'getMultiple'
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
    //         logger("oauthPost-ok", 'getSoftUpdateNews response succeed')
    //         okCallback(response.data)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         errorCallback(error)
    //     })
}