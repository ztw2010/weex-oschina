# Vue版仿开源中国APP

1. 将项目中的List列表组件单独抽取出来作为一个组件使用，当初考虑到在列表内部只需要通过slot将各种item插入到指定位置就可以了，运行后发现抛了一个警告Duplicate presence of slot "default" found in the same render tree
，issue地址[https://github.com/vuejs/vue/issues/2511](https://github.com/vuejs/vue/issues/2511)，最后通过props加component解决了该问题，
通过props将用到的item传递到common_list.vue中，common_list.vue通过<component :is="itemComponent" :item="item"></component>来接收，起到类似slot的功能<br>
2. 需要将重定向的url中的#字符进行转义，否则oschina open api 一直提示redirect_uri与oschina open api 后台配置的不一致，将#替换为%23<br>
3. config/index.js中的assetsPublicPath: '/'修改为assetsPublicPath: './'解决在github pages上页面无法加载的问题，build/utils.js的generateLoaders方法中新增publicPath: '../../'配置项解决图片资源在github pages上页面无法加载的问题



访问地址：[https://ztw2010.github.io/vuepages/index.html](https://ztw2010.github.io/vuepages/index.html) 推荐在Chrome的手机模式查看，页面如下：
![](http://github.com/ztw2010/vuepages/raw/master/images/01.png)
![image](http://github.com/ztw2010/vuepages/raw/master/images/01.png)
![image](http://github.com/ztw2010/vuepages/raw/master/images/02.png)
![image](http://github.com/ztw2010/vuepages/raw/master/images/03.png)
![image](http://github.com/ztw2010/vuepages/raw/master/images/04.png)
![image](http://github.com/ztw2010/vuepages/raw/master/images/05.png)
![image](http://github.com/ztw2010/vuepages/raw/master/images/06.png)
![image](http://github.com/ztw2010/vuepages/raw/master/images/07.png)
![image](http://github.com/ztw2010/vuepages/raw/master/images/08.png)
![image](http://github.com/ztw2010/vuepages/raw/master/images/09.png)
![image](http://github.com/ztw2010/vuepages/raw/master/images/10.png)
![image](http://github.com/ztw2010/vuepages/raw/master/images/11.png)
![image](http://github.com/ztw2010/vuepages/raw/master/images/12.png)

由于访问开源中国OpenApi浏览器不允许跨域，自己搭建后台处理跨域问题，当出现登录需要输入自己在开源中国网站的用户名和密码时，承诺不搜集您的任何数据，可以放心的调用。

