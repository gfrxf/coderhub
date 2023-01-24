const UserService = require('../service/user.service')

class UserController{
   async create(ctx,next){
// 获取用户传递过来的数据
  const user = ctx.request.body
  console.log(user);




// 将user信息存储到数据库中
 const result = await UserService.create(user)
// 查看存储的结果告知前端创建成功
  ctx.body = {
    message:'创建用户成功',
    data:result
  }
    }
}

module.exports = new UserController()