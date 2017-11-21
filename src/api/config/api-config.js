const key_config = {
    app_key: '4uSlcQ0R4OOK2aW82aLJ',
    //app_key: 'zUsdZYXcllExSXxFr8Lp',
    app_secret: 'FkOf5Z3Jh7Z0ZPCFkiEGUZIqtIpQMM9o',
    //app_secret: '2rN1ViXuzLMHbNEQX4GwLTzOwPmSvqhU',
    redirect_uri: 'https://ztw2010.github.io/vuepages/index.html%23/splash',
    //redirect_uri: 'http://192.168.2.22:8089/splash'
}

const host_config = {
    local: 'https://oschinatest.herokuapp.com/',
    //local: 'http://192.168.2.22:8089/',
    host: 'https://oschinatest.herokuapp.com/',
    //host: 'http://192.168.2.22:8083/vueoschina',
    oauth: 'https://www.oschina.net/action/oauth2/authorize',
}

const api_router_config = {
    oauth_post: '/tokenAction'
}

export const HOST_CONCIG = host_config
export const KEY_CONFIG = key_config
export const API_ROUTER_CONFIG = api_router_config
export const DEBUG = false
