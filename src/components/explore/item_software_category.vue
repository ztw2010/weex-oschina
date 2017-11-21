<template>
    <div class="con_div_class" v-on:click="itemClick">
        <div class="item_content_class">
            <span class="item_name_class">{{item.name}}</span>
            <img class="item_right_img_class" src="../../assets/ic_arrow_right.png">
        </div>
        <div class="split_div_class"></div>
    </div>
</template>

<style scoped>

    .con_div_class:active{
        background-color: #FCFCFC;
    }

    .split_div_class {
        background-color: #c8c7cc;
        height: 1px;
    }

    .item_content_class {
        display: flex;
        flex-direction: row;
        height: 50px;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
    }

    .item_name_class {
        flex: 9;
        line-height: 50px;
        text-align: left;
        font-weight: bold;
        font-size: 15px;
        color: #333;
    }

    .item_right_img_class {
        width: 10px;
        height: 10px;
    }

</style>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        name: "item_software_category",
        methods: {
            itemClick(){
                let vue = this
                let obj = vue.type
                vue.$root.Bus.$emit('onItemClick', vue.item)
            }
        },
    }
</script>
