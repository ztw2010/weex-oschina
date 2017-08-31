import axios from 'axios';
import {KEY_CONFIG} from '../config/api-config'
import { clearToken } from '../../utils/token-storage'

export const goAxios = (config, okCallback, errorCallback) => {
    axios(config)
        .then(function (response) {
            if(response.data.errorCode){
                clearToken();
                console.log("server has error, errorCode="+response.data.errorCode+",error msg="+response.data.errorMsg)
                window.location.href = KEY_CONFIG.redirect_uri
            } else {
                okCallback(response.data)
            }
        })
        .catch(function (error) {
            console.log(error);
            errorCallback(error)
        })
}