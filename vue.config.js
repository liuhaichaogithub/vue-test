module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8081',
                changeOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''
                },
                onProxyRes(proxyRes, req, res) {
                    //在控制台显示真实代理地址
                    const realUrl = new URL(req.url || '','http://127.0.0.1:8081')?.href || ''
                    proxyRes.headers['x-real-url'] = realUrl
                  },
            }
        }
    }
}