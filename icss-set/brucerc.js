/* 详情请参考文档：https://github.com/JowayYoung/bruce-cli */
module.exports = {
	alias: {
		"vue-router": "vue-router/dist/vue-router.min.js"
	}, // 模块导入快捷方式
	browserList: [], // 目标浏览器配置列表
	errorCb: null, // 构建失败回调函数
	eslintIgnores: [], // Eslint忽略路径列表
	eslintRules: {}, // Eslint校验规则列表
	frame: "vue", // 开发框架
	includeModules: [], // 编译模块白名单列表(node_modules/xxx)
	openPath: "", // 开发环境下浏览器打开后显示URL路径
	proxy: {}, // 接口代理
	style: "scss", // 样式格式
	stylelintIgnores: [], // Stylelint忽略路径列表
	stylelintRules: {}, // Stylelint校验规则列表
	successCb: null, // 构建成功回调函数
	uploadOpts: null, // 上传配置函数
	useTs: false // 集成TypeScript
};