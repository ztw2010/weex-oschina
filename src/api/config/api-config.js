const key_config = {
    app_key: '4uSlcQ0R4OOK2aW82aLJ',
    app_secret: 'FkOf5Z3Jh7Z0ZPCFkiEGUZIqtIpQMM9o',
    redirect_uri: 'http://192.168.2.22:8083/splash'
}

const host_config = {
    local: 'http://192.168.2.22:8083/',
    host: 'http://192.168.2.22:8083/vueoschina',
    oauth: 'https://www.oschina.net/action/oauth2/authorize',
}

const api_router_config = {
    oauth_post: '/tokenAction'
}

export const HOST_CONCIG = host_config
export const KEY_CONFIG = key_config
export const API_ROUTER_CONFIG = api_router_config
export const DEBUG = false
