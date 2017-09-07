<template lang="html">
    <div class="mine">
        <div class="mine_top_div_class">
            <div class="top_top_div_class">
                <div class="top_top_img_div_class">
                    <img class="top_top_img_class" src="../../assets/btn_my_setting.png">
                </div>
                <div class="top_top_img_div_class right">
                    <img class="top_top_img_class" src="../../assets/btn_qrcode.png">
                </div>
            </div>
            <div class="top_middle_div_class">
                <md-avatar class="md-large" style="width: 80px;height: 80px">
                    <img v-lazy="mineInfo.portrait">
                </md-avatar>
            </div>
        </div>
        <div class="mine_bottom_div_class">
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { Lazyload } from 'mint-ui'
    export default {
        name: "mine",
        data() {
            return {
            }
        },
        created() {
            this.getInfo()
        },
        computed: {
            ...mapGetters({
                mineInfo: 'mine_info'
            })
        },
        methods:{
            ...mapActions([
                'getMineInfo'
            ]),
            getInfo(){
                this.getMineInfo()
            }
        }
    }
</script>

<style lang="css">
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

    .mine_bottom_div_class{
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        flex-direction: column;
        flex: 5;
        background-color: white;
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
        justify-content: center;
        align-items: center;
    }
</style>