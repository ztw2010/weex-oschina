<template>
  <div class="container_div_class" v-on:click="itemClick">
    <span class="title_span_class">{{item.name}}</span>
    <span class="des_span_clas">{{item.description}}</span>
    <div class="split_div_class"></div>
  </div>
</template>

<style scoped>

    .container_div_class{
      padding: 10px 10px 0px 10px;
      display: flex;
      flex-direction: column;
    }

    .container_div_class:active{
      background-color: #FCFCFC;
    }

    .title_span_class{
      font-size: 15px;
      color: #333;
      font-weight: bold;
    }

    .des_span_clas{
      font-size: 12px;
      color: #999999;
      margin-top: 5px;
    }

    .split_div_class {
      background-color: #c8c7cc;
      height: 1px;
      margin-top: 5px;
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
        name: "item_project_list",
        methods: {
            itemClick(){
                let vue = this
                let obj = vue.type
                vue.$root.Bus.$emit('onItemClick', vue.item)
            }
        },
    }
</script>
