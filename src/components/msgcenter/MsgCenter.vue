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
  export default {
      data() {
          return {
              currentPage: 'atme'
          }
      },
      methods: {
          goBack(){
              this.$router.go(-1)
          },
          showRecentTweet(){
          },
          showHotTweet(){
          },
          showMineTweet(){
          },
          switchTab(tabName){
              this.currentPage = tabName
              var vue = this
              switch (tabName) {
                  case 'atme':
                      break;
                  case 'comment':
                      break;
                  case 'private_letter':
                      break;
                  default:
                      break;
              }
          }
      },
  }
</script>
