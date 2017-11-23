const key_config = {
    // app_secret: '2rN1ViXuzLMHbNEQX4GwLTzOwPmSvqhU',
    // app_key: 'zUsdZYXcllExSXxFr8Lp',
    // redirect_uri: 'http://192.168.2.22:8089/splash',
    app_secret: 'FkOf5Z3Jh7Z0ZPCFkiEGUZIqtIpQMM9o',
    app_key: '4uSlcQ0R4OOK2aW82aLJ',
    redirect_uri: 'https://ztw2010.github.io/vuepages/index.html%23/splash',
}

const host_config = {
    // host: 'http://192.168.2.22:8083/vueoschina',
    // local: 'http://192.168.2.22:8089/',
    local: 'https://oschinatest.herokuapp.com/',
    host: 'https://oschinatest.herokuapp.com/',
    oauth: 'https://www.oschina.net/action/oauth2/authorize',
}

const api_router_config = {
    oauth_post: '/tokenAction'
}

export const HOST_CONCIG = host_config
export const KEY_CONFIG = key_config
export const API_ROUTER_CONFIG = api_router_config
export const DEBUG = false
