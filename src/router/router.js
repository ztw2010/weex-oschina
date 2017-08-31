import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Splash from '../components/Splash'
import Multiple from '../components/Multiple'
import AllNews from '../components/AllNews'
import MultiNews from '../components/MultiNews'
import SoftUpdate from '../components/SoftUpdate'
import Tweet from '../components/Tweet'
import NewsDetail from '../components/NewsDetail'
import Discovery from '../components/Discovery'
import Mine from '../components/Mine'
import CommentList from '../components/CommentList'

import store from '../store/'
import * as scrollUtils from '../utils/scroll-position'
import { DEBUG } from '../api/config/api-config'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/splash',
            component: Splash,
        },
        {
            path: '/main',
            name: 'main',
            component: Main,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: 'multiple',
                    name: 'multiple',
                    component: Multiple,
                    meta: {
                        requiresAuth: true
                    },
                    children: [
                        {
                            path: 'allnews',
                            name: 'allnews',
                            component: AllNews,
                            meta: {
                                requiresAuth: true
                            },
                        },
                        {
                            path: 'multinews',
                            name: 'multinews',
                            component: MultiNews,
                            meta: {
                                requiresAuth: true
                            }
                        },
                        {
                            path: 'softupdate',
                            name: 'softupdate',
                            component: SoftUpdate,
                            meta: {
                                requiresAuth: true
                            }
                        }
                    ]
                },
                {
                    path: 'tweet',
                    name: 'tweet',
                    component: Tweet,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'discovery',
                    name: 'discovery',
                    component: Discovery,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'mine',
                    name: 'mine',
                    component: Mine,
                    meta: {
                        requiresAuth: true
                    }
                }
            ]
        },
        {
            path: '/newsdetail/:newsId/:newsType',
            name: 'newsdetail',
            component: NewsDetail,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/newscommentlist/:newsId',
            name: 'commentlist',
            component: CommentList,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '*',
            redirect: '/splash'
        }
    ]
})

let routerList = []

router.beforeEach((to, from, next) => {

    let position = scrollUtils.getScrollTop()
    let currentRouterIndex = routerList.findIndex(e => {
        return e.path === from.fullPath
    })

    if (currentRouterIndex != -1) {
        routerList[currentRouterIndex].position = position
    } else {
        routerList.push({
            path: from.fullPath,
            position: position
        })
    }

    let token = store.dispatch('getToken')
    if(!token){
        next({
            path: '/splash'
        })
    } else {
        if (to.meta.requiresAuth) {
            if (DEBUG) {
                next()
            } else {
                const login = store.getters.login
                if (login) {
                    next()
                }
                else {
                    next({
                        path: '/splash'
                    })
                }
            }
        } else {
            next()
        }
        next()
    }
})

router.afterEach((to, from, next) => {

    let savedPosition = routerList.find(e => {
        return e.path === to.fullPath
    })

    if (typeof savedPosition !== 'undefined') {
        Vue.nextTick(() => {
            scrollUtils.setScrollTop(savedPosition.position)
        })
    } else {
        Vue.nextTick(() => {
            scrollUtils.setScrollTop(0)
        })
    }
})

export default router
