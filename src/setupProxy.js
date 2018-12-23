const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    if (process.env.REACT_APP_TARGET === 'electron') {
        app.use(proxy('/api/v1', {
            target: 'http://127.0.0.1:8888/'
        }))
    } else {
        app.use(proxy('/api/v1', {
            target: 'http://192.168.1.30/'
        }));
    }
}