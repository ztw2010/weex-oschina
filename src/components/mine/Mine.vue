<template lang="html">
    <div class="mine">
        <div class="mine_top_div_class">
            <div class="top_top_div_class">
                <div class="top_top_img_div_class" @click="toggleLeftSidenav">
                    <img class="top_top_img_class" src="../../assets/btn_my_setting.png">
                </div>
                <div class="top_top_img_div_class right">
                    <img class="top_top_img_class" src="../../assets/btn_qrcode.png">
                </div>
            </div>
            <div class="top_middle_div_class">
                <div class="mine_img_div_class">
                    <md-avatar class="md-large">
                        <img class="mine_img_class" v-lazy="mineInfo.portrait">
                    </md-avatar>
                </div>
                <div class="mine_user_info_div_class">
                    <span class="mine_user_info_span_class">{{mineInfo.name}}</span>
                    <span class="mine_integral_span_class">积分 0</span>
                </div>
                <div class="mine_user_bottom_div_class">
                    <div class="mine_item_div_class" v-on:click="goToMineTweetList()">
                        <span class="count_span_class">{{mineInfo.tweetCount}}</span>
                        <span class="count_dis_span_class">动弹</span>
                    </div>
                    <div class="mine_item_div_class" v-on:click="goToFavoriteList()">
                        <span class="count_span_class">{{mineInfo.favoriteCount}}</span>
                        <span class="count_dis_span_class">收藏</span>
                    </div>
                    <div class="mine_item_div_class" v-on:click="goToFollowList()">
                        <span class="count_span_class">{{mineInfo.followersCount}}</span>
                        <span class="count_dis_span_class">关注</span>
                    </div>
                    <div class="mine_item_div_class" v-on:click="goToFansList()">
                        <span class="count_span_class">{{mineInfo.fansCount}}</span>
                        <span class="count_dis_span_class">粉丝</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mine_bottom_div_class">
            <div class="bottom_item_div_class">
                <div class="item_top_div_class">
                    <img style="width: 30px;height: 30px" src="../../assets/ic_my_message.png">
                    <div class="mine_badge_div_class" v-on:click="goToMsgCenter">
                        <span class="bottom_item_span_class_mine">我的消息</span>
                        <mt-badge size="small" color="#E35B5A" style="margin-left: 5px;text-align: center;line-height: 20px">2</mt-badge>
                    </div>
                    <img style="width: 10px;height: 15px" src="../../assets/ic_arrow_right.png">
                </div>
                <div class="item_split_div_class"></div>
            </div>
            <div class="bottom_item_div_class">
                <div class="item_top_div_class">
                    <img style="width: 30px;height: 30px" src="../../assets/ic_my_profile.png">
                    <span class="bottom_item_span_class">我的资料</span>
                    <img style="width: 10px;height: 15px" src="../../assets/ic_arrow_right.png">
                </div>
                <div class="item_split_div_class"></div>
            </div>
            <div class="bottom_item_div_class">
                <div class="item_top_div_class">
                    <img style="width: 30px;height: 30px" src="../../assets/ic_my_blog.png">
                    <span class="bottom_item_span_class">我的博客</span>
                    <img style="width: 10px;height: 15px" src="../../assets/ic_arrow_right.png">
                </div>
                <div class="item_split_div_class"></div>
            </div>
            <div class="bottom_item_div_class">
                <div class="item_top_div_class">
                    <img style="width: 30px;height: 30px" src="../../assets/ic_my_question.png">
                    <span class="bottom_item_span_class">我的问答</span>
                    <img style="width: 10px;height: 15px" src="../../assets/ic_arrow_right.png">
                </div>
                <div class="item_split_div_class"></div>
            </div>
            <div class="bottom_item_div_class">
                <div class="item_top_div_class">
                    <img style="width: 30px;height: 30px" src="../../assets/ic_my_event.png">
                    <span class="bottom_item_span_class">我的活动</span>
                    <img style="width: 10px;height: 15px" src="../../assets/ic_arrow_right.png">
                </div>
                <div class="item_split_div_class"></div>
            </div>
            <div class="bottom_item_div_class">
                <div class="item_top_div_class">
                    <img style="width: 30px;height: 30px" src="../../assets/ic_my_team.png">
                    <span class="bottom_item_span_class">我的团队</span>
                    <img style="width: 10px;height: 15px" src="../../assets/ic_arrow_right.png">
                </div>
            </div>
        </div>
        <md-sidenav class="md-left" ref="leftSidenav" style="background-color: #f6f6f6">
            <md-toolbar class="md-large" style="background-color: #24cf5f">
                <div class="md-toolbar-container" >
                  <h3 class="md-title">设置</h3>
                </div>
            </md-toolbar>
            <div class="mine_logout_div_class">
                <span class="logout_span_class">注销</span>
            </div>
        </md-sidenav>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { Lazyload,Badge } from 'mint-ui'
    export default {
        name: "mine",
        data() {
            return {
            }
        },
        created() {
            this.getInfo()
        },
        watch:{
            '$route': function (to, from) {
                if(to.name === 'mine'){
                    this.getInfo()
                }
            }
        },
        computed: {
            ...mapGetters({
                mineInfo: 'mine_info'
            })
        },
        methods:{
            ...mapActions([
                'getMineInfo',
                'updateType'
            ]),
            toggleLeftSidenav() {
                this.$refs.leftSidenav.toggle();
            },
            getInfo(){
                this.getMineInfo()
            },
            goToFavoriteList(){
                this.$router.push({ name: 'favorite' })
            },
            goToFollowList(){
                this.updateType(1)
                this.$router.push({ name: 'follow'})
            },
            goToFansList(){
                this.updateType(0)
                this.$router.push({name : 'follow'})
            },
            goToMineTweetList(){
                this.$router.push({name : 'mineInfoTweet'})
            },
            goToMsgCenter(){
                this.$router.push({name : 'msgcenter'})
            }
        }
    }
</script>

<style scoped>
    .mine{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

    .mine_top_div_class{
        display: flex;
        flex-direction: column;
        flex: 5;
        background-color: #24cf5f;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .top_top_div_class{
        display: flex;
        justify-content: space-between;
        height: 30px;
        align-items: center;
    }

    .top_top_img_div_class{
        width: 50px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .right{
        justify-content: flex-end;
    }

    .top_top_img_class{
        width: 20px;
        height: 20px;
    }

    .top_top_img_div_class:active{
        background-color: #10000000;
        border-radius: 5px;
    }

    .top_middle_div_class{
        flex: 3;
        display: flex;
        flex-direction: column;
    }

    .mine_img_div_class{
        height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px;
    }

    .mine_img_class{
        width: 80px;
        height: 80px;
    }

    .mine_user_info_div_class{
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .mine_user_info_span_class{
        font-size: 15px;
        color: white;
    }

    .mine_integral_span_class{
        font-size: 12px;
        color: white;
    }

    .mine_user_bottom_div_class{
        display: flex;
        flex-direction: row;
        flex: 3;
        align-items: flex-end;
    }

    .mine_bottom_div_class{
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        flex-direction: column;
        flex: 5;
        background-color: white;
    }

    .mine_item_div_class{
        height: 50px;
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    .mine_item_div_class:active{
        background-color: #1EB050;
    }

    .count_span_class{
        color: white;
        font-size: 15px;
        font-weight: bold;
    }

    .count_dis_span_class{
        color: white;
        font-size: 13px;
    }

    .bottom_item_div_class{
        display: flex;
        flex-direction: column;
        height: 50px;
    }

    .bottom_item_div_class:active{
        background-color: #ebebeb;
    }

    .item_top_div_class{
        padding-left: 10px;
        padding-top: 5px;
        padding-right: 10px;
        padding-bottom: 5px;
        display: flex;
        flex-direction: row;
        height: 49px;
        align-items: center;
    }

    .bottom_item_span_class{
        font-weight: bold;
        font-size: 15px;
        color: #111111;
        flex: 8;
        line-height: 40px;
        margin-left: 10px;
    }

    .item_split_div_class{
        margin-left: 50px;
        height: 1px;
        background-color: #c8c7cc;
    }

    .mine_badge_div_class{
        display: flex;
        flex-direction: row;
        flex: 8;
        align-items: center;
    }

    .bottom_item_span_class_mine{
        font-weight: bold;
        font-size: 15px;
        color: #111111;
        line-height: 40px;
        margin-left: 10px;
    }

    .mine_logout_div_class{
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-top-style: solid;
        border-top-color: #d4d4d4;
        border-top-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #d4d4d4;
        border-bottom-width: 1px;
        margin-top: 10px;
    }

    .mine_logout_div_class:active{
        background-color: #ebebeb;
    }

    .logout_span_class{
        line-height: 50px;
        text-align: center;
        padding-left: 10px;
        font-size: 15px;
        color: #111111;
    }

</style>