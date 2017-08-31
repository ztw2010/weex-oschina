<template lang="html">
    <div class="multiple">
        <nav class="sub_category_nav">
            <span class="tab-tag" v-on:click="switchTab('all_news')" :class="currentPage == 'all_news'?'tab-select':''">所有</span>
            <span class="tab-tag" v-on:click="switchTab('multiple_news')" :class="currentPage == 'multiple_news'?'tab-select':''">综合新闻</span>
            <span class="tab-tag" v-on:click="switchTab('softupdate_news')" :class="currentPage == 'softupdate_news'?'tab-select':''">软件更新</span>
        </nav>
        <div class="multiple-content">
            <transition name="fade">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "multiple",
        data() {
            return {
                currentPage: 'all_news'
            };
        },
        created() {
            this.showAllNewsPage()
        },
        computed: {
            ...mapGetters({
                tabPage: 'tab_page'
            })
        },
        watch: {
            '$route': function (val, oldVal) { //恢复显示之前的tab页
                if(val && val.name === 'multiple'){
                    this.switchTab(this.tabPage)
                }
            }
        },
        methods: {
            ...mapActions([
                'updateTabPage'
            ]),
            showAllNewsPage(){
                this.$router.push({ name: 'allnews' })
                this.currentPage = 'all_news'
            },
            showMultipleNewsPage(){
                this.$router.push({ name: 'multinews' })
                this.currentPage = 'multiple_news'
            },
            showSoftupdateNewsPage(){
                this.$router.push({ name: 'softupdate' })
                this.currentPage = 'softupdate_news'
            },
            switchTab(tab){
                var vue = this
                switch (tab) {
                    case 'all_news':
                        vue.showAllNewsPage()
                        break;
                    case 'multiple_news':
                        vue.showMultipleNewsPage()
                        break;
                    case 'softupdate_news':
                        vue.showSoftupdateNewsPage()
                        break;
                    default:
                        vue.showAllNewsPage()
                        break;
                }
                this.updateTabPage(tab)
            }
        }
    }
</script>

<style lang="css">

    .multiple{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .sub_category_nav{
        position: fixed;
        top: 40px;
        width: 100%;
        height: 30px;
        background-color: #F6F6F6;
        display: flex;
        flex-direction: row;
        text-align: center;
        line-height: 30px;
        font-size: 15px;
    }

    .tab-tag{
        flex: 1;
        color: #b6b6b6;
    }


    .tab-tag.tab-select {
        color: #24cf5f;
        border-bottom-color: #24cf5f;
        border-bottom-width: 2px;
        border-bottom-style: solid;
    }

    .multiple-content{
        width: 100%;
        height: 100%;
    }

</style>