<template lang="html">
    <div class="splash">
        <div class="info-content">
            <h3 class="project-name" >OSChina-Web</h3>
            <div class="project-desc">
                <p>基于oauth、vue的OSChina APP</p>
            </div>
            <div class="logining " :class="loginState?'show': ''">
                <pixel-spinner :size="'45px'" :color="'#007AFF'"></pixel-spinner>
            </div>
        </div>
        <div class="div_login">
            <button class="login" v-on:click="oauth">登录</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { HOST_CONCIG, KEY_CONFIG, DEBUG } from '../api/config/api-config'
import { getUrlKey } from '../utils/string-utils'
export default {
    name: "splash",
    data() {
		return {
			oauthCode: getUrlKey('code')
		}
	},
	computed: {
		code: function () {
			if (this.oauthCode) {
				return true
			} else {
				return false
			}
		},
		//mapGetters工具函数会将store中的getter映射到局部计算属性中,使用对象扩展操作符把getter混入到computed中
		...mapGetters({
			loginState: 'login'
		}),
	},
	watch: {
		loginState: function (val, oldVal) {
			if (val) {
				this.goMain()
			}
		},
        '$route.params': function (val, oldVal) {
            if(val){
                if(typeof(val.haserror) !== "undefined" && val.haserror){
                    this.logOut()
                }
            }
        },
	},
	mounted() {
		this.checkUrl()
	},
    methods: {
        //mapActions 工具函数会将 store 中的 dispatch 方法映射到组件的 methods 中。
		// 和 mapState、mapGetters 也类似，只不过它映射的地方不是计算属性，而是组件的 methods 对象上。
		//...mapMutations映射的是 store 的 commit 方法
        ...mapActions([
            'login',
            'logout'
        ]),
        checkUrl() {
            var vue = this
            if (vue.loginState) {
                vue.goMain()
            } else {
                if (vue.code) {
                    vue.login(vue.oauthCode)
                }
            }
        },
        oauth() {
            var vue = this
            if (DEBUG) {
                vue.goMain()
            } else {
                var client_id = KEY_CONFIG.app_key;
                var redirect_uri = KEY_CONFIG.redirect_uri;
                var oauthUrl = HOST_CONCIG.oauth;
                window.open(oauthUrl + '?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirect_uri, "_self", "", true);
            }
        },
        goMain() {
            let vue = this
            setTimeout(function () {
                vue.$router.replace({ name: 'main' });
            }, 2000)
        },
        logOut(){
            this.logout()
        },
    }
}
</script>

<style lang="css">
.splash {
    width: 100%;
    height: 100%;
    background: #ffffff;
    opacity: .9;
    text-align: center;
    flex-direction: column;
    background-image: url("../assets/bg_login.png");
}

.info-content {
    width: 100%;
    height: 80%;
    text-align: center;
    flex-direction: column;
    color: white;
    padding-top: 20px;
}

.project-name {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 20px;
}

.project-desc {
    margin: 0;
    padding: 0;
    text-align: center;
    padding-top: 2rem;
}

.logining {
    margin-top: 4rem;
    opacity: .9;
    opacity: 0;
}

.logining.show {
    opacity: 1;
}

.div_login{
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login {
    width: 100px;
    height: 40px;
    background-color: #000000;
    color: #ffffff;
    border-radius: 25px;
    border-style: none;
}

</style>
