const KoaRouter = require('@koa/router')
const UserController = require('../controller/user.controller')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')
const userRouter = new KoaRouter({
    prefix:'/users'
}) 
// 2.1.用户注册接口
userRouter.post('/',verifyUser,handlePassword,UserController.create)
// 2.2.为用户提供头像
userRouter.get('/avatar/:userId', UserController.showAvatarImage)
module.exports = userRouter