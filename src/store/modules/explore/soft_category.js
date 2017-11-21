import {
    SOFTWARE_CATEGORY,
    SOFTWARE_CATEGORY_SECOND,
    SOFTWARE_CATEGORY_THIRD,
    RECOMMEND_LIST,
    TIME_LIST,
    VIEW_LIST,
    CN_LIST,
    PROJECT_TAG_LIST
} from '../../mutations-type'


import * as api from '../../../api/impl/explore/soft_category-impl'
import {logger} from '../../../utils/logger'

const state = {
    softCategory: [],
    softCategorySecond: [],
    softCategoryThird: [],
    recommendList: [],
    recommendPage: 1,
    timeList: [],
    timedPage: 1,
    viewList: [],
    viewPage: 1,
    cnList: [],
    cnPage: 1,
}

const mutations = {

    [SOFTWARE_CATEGORY](state, obj) {
        if (!(obj === null || obj === undefined) && obj.response.softwareTypes) {
            state.softCategory = []
            for (var i = 0; i < obj.response.softwareTypes.length; i++) {
                obj.response.softwareTypes[i].type = obj.type
                obj.response.softwareTypes[i].layer = 1
                state.softCategory.push(obj.response.softwareTypes[i])
            }
        }
    },

    [SOFTWARE_CATEGORY_SECOND](state, obj) {
        if (!(obj === null || obj === undefined) && obj.response.softwareTypes) {
            state.softCategorySecond = []
            for (var i = 0; i < obj.response.softwareTypes.length; i++) {
                obj.response.softwareTypes[i].type = obj.type
                obj.response.softwareTypes[i].layer = 2
                state.softCategorySecond.push(obj.response.softwareTypes[i])
            }
        }
    },

    [SOFTWARE_CATEGORY_THIRD](state, obj) {
        if (!(obj === null || obj === undefined) && obj.projectlist) {
            state.softCategoryThird = []
            for (var i = 0; i < obj.projectlist.length; i++) {
                obj.projectlist[i].type = obj.type
                obj.projectlist[i].layer = 3
                state.softCategoryThird.push(obj.projectlist[i])
            }
        }
    },

    [RECOMMEND_LIST](state, obj) {
        if (obj.page === 1) {
            state.recommendList = []
            state.recommendPage = 2
        } else {
            state.recommendPage++
        }
        for (var i = 0; i < obj.projectlist.length; i++) {
            obj.projectlist[i].type = obj.type
            state.recommendList.push(obj.projectlist[i])
        }
    },

    [TIME_LIST](state, obj) {
        if (obj.page === 1) {
            state.timeList = []
            state.viewPage = 2
        } else {
            state.viewPage++
        }
        for (var i = 0; i < obj.projectlist.length; i++) {
            obj.projectlist[i].type = obj.type
            state.timeList.push(obj.projectlist[i])
        }
    },

    [VIEW_LIST](state, obj) {
        if (obj.page === 1) {
            state.viewList = []
            state.recommendPage = 2
        } else {
            state.recommendPage++
        }
        for (var i = 0; i < obj.projectlist.length; i++) {
            obj.projectlist[i].type = obj.type
            state.viewList.push(obj.projectlist[i])
        }
    },

    [CN_LIST](state, obj) {
        if (obj.page === 1) {
            state.cnList = []
            state.cnPage = 2
        } else {
            state.cnPage++
        }
        for (var i = 0; i < obj.projectlist.length; i++) {
            obj.projectlist[i].type = obj.type
            state.cnList.push(obj.projectlist[i])
        }
    }
}

const actions = {

    getSoftwareCategoryList: ({commit}, categoryId) => {
        console.log('getSoftwareCategoryList')
        api.getSoftCategoryList(
            categoryId,
            response => {
                if (categoryId == 0) {
                    commit(SOFTWARE_CATEGORY, {'response': response, 'categoryId': categoryId, 'type': 'category'})
                } else {
                    commit(SOFTWARE_CATEGORY_SECOND, {
                        'response': response,
                        'categoryId': categoryId,
                        'type': 'category'
                    })
                }
            },
            err => {
                console.log(err);
            }
        )
    },

    getProjectList: ({commit}, obj) => {
        console.log('getProjectList')
        api.getProjectList(
            obj,
            response => {
                if (obj.type === 'recommend') {
                    commit(RECOMMEND_LIST, {'projectlist': response.projectlist, 'page': obj.page, 'type': obj.type})
                } else if (obj.type === 'time') {
                    commit(TIME_LIST, {'projectlist': response.projectlist, 'page': obj.page, 'type': obj.type})
                } else if (obj.type === 'view') {
                    commit(VIEW_LIST, {'projectlist': response.projectlist, 'page': obj.page, 'type': obj.type})
                } else if (obj.type === 'cn') {
                    commit(CN_LIST, {'projectlist': response.projectlist, 'page': obj.page, 'type': obj.type})
                }
            },
            err => {
                console.log(err);
            }
        )
    },

    getProjectTagList: ({commit}, obj) => {
        console.log('getProjectTagList')
        api.getProjectTagList(
            obj,
            response => {
                commit(SOFTWARE_CATEGORY_THIRD, {
                    'projectlist': response.projectlist,
                    'page': obj.page,
                    'type': 'category'
                })
            },
            err => {
                console.log(err);
            }
        )
    },
}

export default {
    state,
    actions,
    mutations
}