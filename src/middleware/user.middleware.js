const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS } = require('../config/error')
const UserService = require('../service/user.service')
const md5password = require('../utils/md5-password')
const verifyUser = async (ctx,next) =>{
    // 获取用户传递过来的数据
  const user = ctx.request.body
//   console.log(user);

// 2.1账号密码校验
const {name,password} = user
if(!name || !password){
   return ctx.app.emit('error',NAME_OR_PASSWORD_IS_REQUIRED,ctx)
}
// 用户存在校验
const users = await UserService.findUserByName(name)
if(users.length){
   return ctx.app.emit('error',NAME_IS_ALREADY_EXISTS,ctx)
}
// 执行下一个中间件
await next()
} 

const handlePassword = async (ctx,next) =>{
    // 取出密码
    const {password} = ctx.request.body
    // 对密码进行加密
    ctx.request.body.password = md5password(password)
    // 执行下一个中间件
    await next()
}
module.exports = {verifyUser,
    handlePassword
}