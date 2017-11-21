<template lang="html">
    <div>
        <div class="split_div_class"></div>
        <div class="item_div_class" v-on:click="gotoSoftware()">
            <img class="item_img_class" src="../../assets/ic_discover_softwares.png">
            <span class="item_name_class">开源软件</span>
            <img class="item_right_img_class" src="../../assets/ic_arrow_right.png">
        </div>
        <div class="split_div_class inner"></div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "discovery",
        methods: {
            gotoSoftware() {
                this.$router.push({ name: 'softcategory' })
            },
        }
    }
</script>

<style scoped>
    .split_div_class{
        background-color: #c8c7cc;
        height: 1px;
        margin-top: 10px;
    }

    .item_div_class{
        height: 50px;
        align-items: center;
        display: flex;
        flex-direction: row;
        padding-left: 10px;
        padding-right: 10px;
    }

    .item_div_class:active{
        background-color: #ebebeb;
    }

    .item_img_class{
        width: 20px;
        height: 20px;
    }

    .item_name_class{
        font-size: 15px;
        color: #333;
        font-weight: bold;
        line-height: 50px;
        height: 100%;
        text-align: left;
        flex: 8;
        margin-left: 20px;
    }

    .item_right_img_class{
        width: 10px;
        height: 10px;
    }

    .inner{
        margin-left: 50px;
        margin-top: 0px;
    }
</style>