import Vue from 'vue'
import App from './App'

// 导入uview
import uView from "uview-ui";
Vue.use(uView);
// 导入vuex
import store from 'store/index.js'
Vue.prototype.$store = store
// 导入全局路由
import { router, RouterMount } from 'utils/router.js'
Vue.use(router)

// 引入全局组件
import './utils/components'


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})


// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
