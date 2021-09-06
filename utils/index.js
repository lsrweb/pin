class uitls {
	constructor(arg) {
		this.openid = ''

	}
	// 格式化时间为指定格式
	formDate(date = new Date(), vali = ':') {
		const year = new Date(date).getFullYear()
		const month = new Date().getMonth() + 1
		const day = new Date().getDate()
		return `${year}${vali}${month}${vali}${day}`
	}
	// 时间戳转化为日期
	timeStamp2String(time) {
		const datetime = new Date().setTime(time);
		const year = datetime.getFullYear();
		const month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
		const date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
		const hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
		const minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
		const second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
		return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
	}

	// 字符串转为数字
	stringToNumber(val) {
		return Number(val);
	}
	// 验证是否全是空格
	checkAllSpace(source) {
		const regex = /^\s+$/g
		return regex.test(source);
	}
	// 验证是否为移动手机号
	isMobilePhone(source) {
		const regex = /^((\(\d{3}\))|(\d{3}\-))?1\d{10}/;
		return regex.test(source);
	}
	// 格式化链接获取参数
	getRequest(url, key) {
		let theRequest = new Object();
		let urlarg = url.slice(url.indexOf('?') + 1);
		let arr = urlarg.split('&').map(function (item, index, arr) {
			return item.split('=')
		})
		let arr1 = arr.map(function (item, index, arr) {
			return arr[index] = {
				[item[0]]: item[1]
			};
		})
		if (key) {
			for (let i = 0; i < arr1.length; i++) {
				if (arr1[i][key]) {
					return arr1[i][key]
				}
			}
		}
		return arr1;
	}

	// 数字精度修复
	/**
	 * @param {Object} number  格式化数字
	 * @param {Object} decimals  保留位数
	 * @param {Object} dec_point 小数点符号
	 * @param {Object} thousands_sep  千分位符号
	 * @param {Object} roundtag   舍入参数
	 */
	number_format(number, decimals, dec_point, thousands_sep, roundtag) {
		number = (number + '').replace(/[^0-9+-Ee.]/g, '');
		roundtag = roundtag || "ceil";
		let n = !isFinite(+number) ? 0 : +number,
			prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
			sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
			dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
			s = '',
			toFixedFix = function (n, prec) {
				var k = Math.pow(10, prec);

				return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
			};
		s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
		let re = /(-?\d+)(\d{3})/;
		while (re.test(s[0])) {
			s[0] = s[0].replace(re, "$1" + sep + "$2");
		}

		if ((s[1] || '').length < prec) {
			s[1] = s[1] || '';
			s[1] += new Array(prec - s[1].length + 1).join('0');
		}
		return s.join(dec);
	}

	// login
	login(info, self) {
		//#ifdef APP-PLUS
		uni.showModal({
			title: '请登录',
			content: '请登录后继续操作',
			confirmText: '去登录',
			success: function (res) {
				if (res.confirm) {
					uni.navigateTo({
						url: ''
					});
					return false;
				}
			}
		});
		uni.login({
			// provider: 'weixin',
			success: function (res) {
				// 根据code换取openid
				uni.request({
					url: this.baseUrl + '',
					method: "POST",
					data: {},
					header: {},
					success: function (ret) {
						if (ret.statusCode == 200 && ret.data.openid) {
							this.openid = ret.data.openid;
							// 缓存操作
							uni.setStorageSync(
								'token',
								parSetData(ret.data.token)
							)
						}
					},
					complete: function () { 
						uni.hideLoading()
					},

				});
			}
		});
		//#endif
	}

	// 退出登录
	out() {
		let main = plus.android.runtimeMainActivity();
		//为了防止快速点按返回键导致程序退出重写quit方法改为隐藏至后台  
		plus.runtime.quit = function () {
			main.moveTaskToBack(false);
		};
		//重写toast方法如果内容为 ‘再按一次退出应用’ 就隐藏应用，其他正常toast  
		plus.nativeUI.toast = (function (str) {
			if (str == '再按一次退出应111用') {
				main.moveTaskToBack(false);
				return false;
			} else {
				uni.showToast({
					title: str,
					icon: 'none',
				})
			}
		});
	}
	

}

module.exports = new uitls()
