<template>
    <div class="item_div">
        <span class="type_title">回答({{items.length}})</span>
        <div v-for="(cuItem, index) in items" class="item_div_class">
            <div class="item_top_div">
                <md-avatar>
                    <img v-if="cuItem.imageUrl" class="item_author_img_class" v-lazy="cuItem.imageUrl">
                </md-avatar>
                <div class="item_right_div_class">
                    <span class="item_author_span_class">{{cuItem.title}}</span>
                    <span class="item_pub_span_class">{{cuItem.pubDate | timeAgo}}</span>
                </div>
            </div>
            <div class="item_body_div_class" v-html="cuItem.body"></div>
            <div class="item_diver_div_class" v-if="index != items.length - 1"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'reply_view',
        props: {
            items: {
                type: Array,
                required: true
            }
        },

        data () {
            return {

            }
        },

        computed: {

        },

        methods: {
        }
    }
</script>

<style scoped>

    .item_div{
        background-color: white;
        display: flex;
        flex-direction: column;
    }

    .type_title{
        padding: 10px;
        width: 100%;
        height: 40px;
        background-color: #F5F5F5;
        color: #6A6A6A;
        border-top-width: 0.5px;
        border-top-style: solid;
        border-top-color: #c8c7cc;
        border-bottom-style: solid;
        border-bottom-width: 0.5px;
        border-bottom-color: #c8c7cc;
        text-align: left;
    }

    .item_div_class{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }

    .item_top_div{
        padding: 10px;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .item_author_img_class{
        width: 40px;
        height: 40px;
    }

    .item_right_div_class{
        flex: 6;
        display: flex;
        height: 40px;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 10px;
    }

    .item_author_span_class{
        color: #111111;
        font-size: 13px;
    }

    .item_pub_span_class{
        color: #6a6a6a;
        font-size: 13px;
    }

    .item_body_div_class{
        padding: 10px;
    }

    .item_diver_div_class{
        margin-left: 10px;
        width: 100%;
        height: 1px;
        background-color: #c8c7cc;
    }

</style>