import Request from '../utils/request.js'
let request = new Request().http

export default {
	http: function(data,url,method) {
		return request({
			url: url, //请求头
			method: method || "GET", //请求方式
			data: data, //请求数据
		})
	},
}