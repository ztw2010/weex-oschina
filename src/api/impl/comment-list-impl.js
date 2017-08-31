import {goAxios} from './baseAxios';
import { HOST_CONCIG, API_ROUTER_CONFIG, DEBUG } from '../../api/config/api-config'
import { logger } from '../../utils/logger'
import store from '../../store/'

export const getCommentList = (newsId, page, okCallback, errorCallback) => {

    const accesstoken = store.getters.token.access_token

    var request_data = {
        paramsObj: {
            access_token: accesstoken,
            id: newsId,
            pageSize: 30,
            pageIndex: page,
            dataType: 'json'
        },
        methodName: 'getCommentList'
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
    //         logger("oauthPost-ok", 'getCommentList response succeed')
    //         okCallback(response.data)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         errorCallback(error)
    //     })
}