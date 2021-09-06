import { RouterMount, createRouter, runtimeQuit } from 'uni-simple-router';
import store from '../store/index'


const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routerErrorEach: ({ type, level, ...args }) => {
		// #ifdef APP-PLUS
		// 路由拦截退出
		if (type === 3) {
			router.$lockStatus = false;
			const pages = getCurrentPages();
			const currentPage = pages[pages.length - 1];
			if (level == 1 && args.uniActualData.from === 'backbutton') {
				if (currentPage.$page.meta.isQuit) {
					runtimeQuit();
				}
			}
		}
		// #endif
	},
	routes: [...ROUTES, {
		path: '*',
		redirect: (to) => {
			return { name: '404' }
		}
		}]
});
// 全局路由前置守卫
// 判断页面进入权限 
router.beforeEach((to, from, next) => {
	if (to.meta.isLogin && !store.state.user.hasToken) {
		store.commit('user/LOGIN')

		next()
	}
	next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
	// console.log('跳转结束')
})

export {
	router,
	RouterMount
}
