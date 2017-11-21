import axios from 'axios';
import {KEY_CONFIG} from '../config/api-config'
import { MessageBox,Indicator } from 'mint-ui'
import router from '../../router/router'

export const goAxios = (config, okCallback, errorCallback) => {
    Indicator.open('加载中...');
    axios(config)
        .then(function (response) {
            Indicator.close()
            if(response.data.errorCode){
                console.log("server has error, errorCode="+response.data.errorCode+",error msg="+response.data.errorMsg)
                MessageBox.alert(response.data.errorMsg, '提示').then(action => {
                    router.push({ name: 'splash' , params: {haserror: true}})
                })
            } else {
                okCallback(response.data)
            }
        })
        .catch(function (error) {
            Indicator.close()
            MessageBox.alert(error.message, '提示').then(action => {

            })
            errorCallback(error)
        })
}