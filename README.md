1. 将项目中的List列表组件单独抽取出来作为一个组件使用，当初考虑到在列表内部只需要通过slot将各种item插入到指定位置就可以了，运行后发现抛了一个警告Duplicate presence of slot "default" found in the same render tree
，issue地址[https://github.com/vuejs/vue/issues/2511](https://github.com/vuejs/vue/issues/2511)，最后通过props加component解决了该问题，
通过props将用到的item传递到common_list.vue中，common_list.vue通过<component :is="itemComponent" :item="item"></component>来接收，起到类似slot的功能<br>
2. 需要将重定向的url中的#字符进行转义，否则oschina open api 一直提示redirect_uri与oschina open api 后台配置的不一致，将#替换为%23
