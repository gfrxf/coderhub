const KoaRouter = require('@koa/router')
const {verifyAuth} = require('../middleware/login.middleware')
const momentRouter = new KoaRouter({prefix:'/moment'})
const {create} = require('../controller/moment.controller')
// 编写接口
momentRouter.post('/',verifyAuth,create)

module.exports = momentRouter