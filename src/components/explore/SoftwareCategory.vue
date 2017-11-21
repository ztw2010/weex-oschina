<template>
    <div>
        <mt-header fixed style="background-color: #24cf5f">
            <mt-button v-on:click="goBack()" icon="back" slot="left">开源软件</mt-button>
        </mt-header>
        <nav class="sub_category_nav" style="position: fixed; top: 40px">
            <span class="tab-tag" v-on:click="switchTab('category')" :class="currentPage == 'category'?'tab-select':''">分类</span>
            <span class="tab-tag" v-on:click="switchTab('recommend')"
                  :class="currentPage == 'recommend'?'tab-select':''">推荐</span>
            <span class="tab-tag" v-on:click="switchTab('time')"
                  :class="currentPage == 'time'?'tab-select':''">最新</span>
            <span class="tab-tag" v-on:click="switchTab('view')"
                  :class="currentPage == 'view'?'tab-select':''">热门</span>
            <span class="tab-tag" v-on:click="switchTab('cn')" :class="currentPage == 'cn'?'tab-select':''">国产</span>
        </nav>
        <div class="split_div_class"></div>
        <common_list style="margin-top: 70px; margin-bottom: 50px;" v-bind:list="list" v-bind:isComplete="isComplete"
                     v-on:loadTop="loadTop"
                     v-on:loadBottom="loadBottom" :item-component="componentItem">
        </common_list>
    </div>
</template>

<style scoped>
    .split_div_class {
        background-color: #c8c7cc;
        height: 1px;
    }
</style>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import {Popup} from 'mint-ui'
    import common_list from '../comment/common_list'
    import item_software_category from './item_software_category'
    import item_project_list from './item_project_list'
    export default {
        props: [],
        components: {common_list, item_software_category, item_project_list},
        data() {
            let vue = this
            return {
                list: [],
                componentItem: vue.$options.components.item_software_category,
                isComplete: true,
                currentPage: '',
                currentCategoryLayer: 1,
                cateFirstObj: {},
                cateSecondObj: {},
            }
        },
        computed: {
            ...mapGetters({
                categoryListGetter: 'software_category_list',
                categorySecondListGetter: 'software_category_second_list',
                categoryThirdListGetter: 'software_category_third_list',
                recommendListGetter: 'software_recommend_list',
                recommendPageGetter: 'software_recommend_page',
                timeListGetter: 'software_time_list',
                timedPageGetter: 'software_time_page',
                viewListGetter: 'software_view_list',
                viewPageGetter: 'software_view_page',
                cnListGetter: 'software_cn_list',
                cnPageGetter: 'software_cn_page'
            })
        },
        watch: {
            '$route': function (to, from) {
                if(to.name === 'softcategory' && from.name === 'discovery'){ //只有从discovery页跳转过来才需要重置状态，从详情页过来不需要重置状态
                    this.resetState()
                    this.switchTab('category')
                }
            },
            categoryListGetter: {
                handler: function (val, oldVal) {
                    this.isComplete = true
                    if (val) {
                        this.list = val
                    }
                },
                deep: true
            },

            categorySecondListGetter: {
                handler: function (val, oldVal) {
                    this.isComplete = true
                    if (val) {
                        this.list = val
                    }
                },
                deep: true
            },

            categoryThirdListGetter: {
                handler: function (val, oldVal) {
                    this.isComplete = true
                    if (val) {
                        this.list = val
                    }
                },
                deep: true
            },

            recommendListGetter: {
                handler: function (val, oldVal) {
                    this.isComplete = true
                    this.list = val
                },
                deep: true
            },

            timeListGetter: {
                handler: function (val, oldVal) {
                    this.isComplete = true
                    this.list = val
                },
                deep: true
            },

            viewListGetter: {
                handler: function (val, oldVal) {
                    this.isComplete = true
                    this.list = val
                },
                deep: true
            },

            cnListGetter: {
                handler: function (val, oldVal) {
                    this.isComplete = true
                    this.list = val
                },
                deep: true
            }
        },
        created() {
            let vue = this
            this.$root.Bus.$on('onItemClick', obj => {
                if (obj && obj.type) {
                    switch (obj.type) {
                        case 'category':
                            let layer = obj.layer
                            if (layer == 3) {
                                vue.$router.push({name : 'newsdetail', params: {newsId: '', newsType: 1, 'newsUrl': obj.url}})
                            } else if (layer == 2) {
                                vue.cateSecondObj = obj
                                vue.currentCategoryLayer = 3
                                vue.componentItem = vue.$options.components.item_project_list
                                vue.getProjectTagList({"tag": obj.tag, "page": 1})
                            } else if (layer == 1) {
                                vue.cateFirstObj = obj
                                vue.currentCategoryLayer = 2
                                vue.getSoftCategory(obj.tag)
                            }
                            break;
                        case 'recommend':
                        case 'time':
                        case 'view':
                        case 'cn':
                            vue.$router.push({name : 'newsdetail', params: {newsId: '', newsType: 1, 'newsUrl': obj.url}})
                            break;
                    }
                }
            })
            this.switchTab('category')
        },
        beforeDestroy(){
            this.$root.Bus.$off('onItemClick')
        },
        methods: {
            ...mapActions([
                'getSoftwareCategoryList',
                'getProjectList',
                'getProjectTagList'
            ]),
            resetState(){
                let vue = this
                vue.currentCategoryLayer = 1
                vue.list = []
                vue.isComplete = true
                vue.currentPage = ''
                vue.cateFirstObj = {}
                vue.cateSecondObj = {}
            },
            goBack(){
                let vue = this
                if (this.currentPage === 'category') {
                    if (vue.currentCategoryLayer == 1) {
                        vue.$router.go(-1)
                    } else if (vue.currentCategoryLayer == 2) {
                        vue.currentCategoryLayer = 1
                        vue.cateFirstObj = {}
                        vue.list = vue.categoryListGetter
                        vue.componentItem = vue.$options.components.item_software_category
                    } else if(vue.currentCategoryLayer == 3){
                        vue.currentCategoryLayer = 2
                        vue.list = vue.categorySecondListGetter
                        vue.componentItem = vue.$options.components.item_software_category
                        vue.cateSecondObj = {}
                    }
                } else {
                    vue.$router.go(-1)
                }
            },
            loadTop() {
                this.isComplete = false
                let vue = this
                switch (vue.currentPage) {
                    case 'category':
                        if (vue.currentCategoryLayer == 1) {
                            vue.getSoftCategory(0)
                        } else if (vue.currentCategoryLayer == 2) {
                            vue.getSoftCategory(vue.cateFirstObj.tag)
                        } else if (vue.currentCategoryLayer == 3) {
                            vue.getProjectTagList({"tag": vue.cateSecondObj.tag, "page": 1})
                        }
                        break;
                    case 'recommend':
                        this.getProjectList({"type": 'recommend', "page": 1})
                        break;
                    case 'time':
                        this.getProjectList({"type": 'time', "page": 1})
                        break;
                    case 'view':
                        this.getProjectList({"type": 'view', "page": 1})
                        break;
                    case 'cn':
                        this.getProjectList({"type": 'cn', "page": 1})
                        break;
                }
            },
            loadBottom() {
                let vue = this
                this.isComplete = false
                switch (vue.currentPage) {
                    case 'category':

                        break;
                    case 'recommend':
                        this.getProjectList({"type": 'recommend', "page": vue.recommendPage})
                        break;
                    case 'time':
                        this.getProjectList({"type": 'time', "page": vue.timedPage})
                        break;
                    case 'view':
                        this.getProjectList({"type": 'view', "page": vue.viewPage})
                        break;
                    case 'cn':
                        this.getProjectList({"type": 'cn', "page": vue.cnPage})
                        break;
                }
            },
            switchTab(tabName){
                let vue = this
                if (vue.currentPage === tabName) {
                    return
                }
                this.currentPage = tabName
                switch (tabName) {
                    case 'category':
                        if(vue.currentCategoryLayer == 1){
                            vue.list = vue.categoryListGetter
                            vue.componentItem = vue.$options.components.item_software_category
                            if (vue.categoryListGetter.length > 0) {
                                return
                            }
                            this.getSoftCategory(0)
                        } else if(vue.currentCategoryLayer == 2){
                            vue.list = vue.categorySecondListGetter
                            vue.componentItem = vue.$options.components.item_software_category
                            if (vue.categorySecondListGetter.length > 0) {
                                return
                            }
                            vue.getSoftCategory(obj.tag)
                        } else if(vue.currentCategoryLayer == 3){
                            vue.list = vue.categoryThirdListGetter
                            vue.componentItem = vue.$options.components.item_project_list
                            if (vue.categoryThirdListGetter.length > 0) {
                                return
                            }
                            vue.getProjectTagList({"tag": obj.tag, "page": 1})
                        }
                        break;
                    case 'recommend':
                        vue.list = vue.recommendListGetter
                        vue.componentItem = vue.$options.components.item_project_list
                        if (vue.recommendListGetter.length > 0) {
                            return
                        }
                        this.getProjectList({"type": 'recommend', "page": 1})
                        break;
                    case 'time':
                        vue.list = vue.timeListGetter
                        vue.componentItem = vue.$options.components.item_project_list
                        if (vue.timeListGetter.length > 0) {
                            return
                        }
                        this.getProjectList({"type": 'time', "page": 1})
                        break;
                    case 'view':
                        vue.list = vue.viewListGetter
                        vue.componentItem = vue.$options.components.item_project_list
                        if (vue.viewListGetter.length > 0) {
                            return
                        }
                        this.getProjectList({"type": 'view', "page": 1})
                        break;
                    case 'cn':
                        vue.list = vue.cnListGetter
                        vue.componentItem = vue.$options.components.item_project_list
                        if (vue.cnListGetter.length > 0) {
                            return
                        }
                        this.getProjectList({"type": 'cn', "page": 1})
                        break;
                    default:
                        break;
                }
            },
            getSoftCategory(tag){
                this.getSoftwareCategoryList(tag);
            }
        }
    }
</script>
