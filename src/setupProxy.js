const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        "/api",                                 // 代理路径
        createProxyMiddleware({
            target:'http://codesohigh.com/foo', // 目标路径
            changeOrigin: true,
            pathRewrite:{
                '^/api': ''                     // 重写原路径
            }
        })
    )
}
