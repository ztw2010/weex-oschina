<template>
    <div class="favorite_item_div_class" v-on:click="gotoDetail">
        <div class="favorite_item_top_div_class">
            <span class="favorite_item_type_span">{{item.type | getTypeNameByTypeId}}</span>
            <span class="favorite_item_title_span">{{item.title}}</span>
        </div>
        <div class="favorite_item_split_div_class"></div>
    </div>
</template>

<style scoped>
    .favorite_item_div_class {
        display: flex;
        flex-direction: column;
        height: 60px;
        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .favorite_item_top_div_class {
        display: flex;
        flex-direction: row;
        height: 59px;
        align-items: center;
    }

    .favorite_item_type_span {
        font-size: 13px;
        color: #9d9d9d;
        background-color: #ececec;
        border-radius: 5px;
        padding: 2px;
        width: 50px;
        height: 22px;
        text-align: center;
    }

    .favorite_item_title_span {
        font-size: 15px;
        color: #111111;
        margin-left: 10px;
        flex: 8;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .favorite_item_split_div_class {
        background-color: #c8c7cc;
        margin-left: 10px;
        height: 1px;
    }
</style>

<script>
    export default {
        name: "item_favorite_list",
        props: {
            item: {
                type: Object,
                required: true
            },
            isLast: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        methods: {
            gotoDetail(evt){
                this.$emit('itemClick', {'newsId' : this.item.objid, 'newsType' : this.item.type, 'newsUrl': this.item.url})
            }
        }
    }
</script>
