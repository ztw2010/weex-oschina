<template>
  <div>
    <mt-header fixed style="background-color: #24cf5f">
      <mt-button v-on:click="goBack()" icon="back" slot="left">消息中心</mt-button>
    </mt-header>
    <nav class="sub_category_nav">
      <span class="tab-tag" v-on:click="switchTab('atme')" :class="currentPage == 'atme'?'tab-select':''">@我</span>
      <span class="tab-tag" v-on:click="switchTab('comment')" :class="currentPage == 'comment'?'tab-select':''">评论</span>
      <span class="tab-tag" v-on:click="switchTab('private_letter')" :class="currentPage == 'private_letter'?'tab-select':''">私信</span>
    </nav>
    <div class="msgcenter-content">
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<style scoped>
  
</style>

<script type="text/ecmascript-6">
  import { mapActions, mapGetters } from 'vuex'
  export default {
      data() {
          return {
              currentPage: 'atme'
          }
      },
      created() {
          this.switchTab('atme')
      },
      watch: {
          '$route': function (to, from) {
              if(to.name === 'msgcenter'){
                  this.switchTab(this.tabPage.msgcenter)
              }
          },
      },
      computed: {
          ...mapGetters({
              tabPage: 'tab_page'
          })
      },
      methods: {
          goBack(){
              this.$router.push({ name: 'mine' })
          },
          ...mapActions([
              'updateTabPage'
          ]),
          switchTab(tabName){
              this.currentPage = tabName
              var vue = this
              switch (tabName) {
                  case 'atme':
                      this.$router.push({ name: 'atme' })
                      break;
                  case 'comment':
                      this.$router.push({ name: 'minecomment' })
                      break;
                  case 'private_letter':
                      this.$router.push({ name: 'privateletter' })
                      break;
                  default:
                      break;
              }
              this.updateTabPage({'moduleName' : 'msgcenter', 'tabName' : tabName})
          }
      },
  }
</script>
