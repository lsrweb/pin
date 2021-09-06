const TransformPages = require('uni-read-pages')

const path = require("path");
function resolve(dir){
  return path.join(__dirname, dir);
}


const { webpack } = new TransformPages()
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'name', 'aliasPath', 'meta']
					});
					return JSON.stringify(tfPages.routes)
				}, true)
			})
		]
	}
}
