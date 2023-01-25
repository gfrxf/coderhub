const KoaRouter = require('@koa/router')
const {verifyAuth} = require('../middleware/login.middleware')
const fileRouter = new KoaRouter({prefix:'/login'})
const {create} = require('../controller/file.controller')
// file/avatar => 上传头像
fileRouter.post('/avatar',verifyAuth,create)

module.exports = fileRouter