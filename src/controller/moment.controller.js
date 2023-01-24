const MomentService = require("../service/moment.service")

class CommentController {
  async create(ctx, next) {
    // 1.获取动态的内容
    const { content } = ctx.request.body;
   
    // 2.动态由谁发布(token => id/name)
    const {id}= ctx.user
    console.log(content,id);
    // 3.将动态相关的数据保存到数据库
    const result = await MomentService.create(content,id)

    ctx.body = {
        code:0,
        message:"创建用户动态成功",
        data:result
    }
  }
}
module.exports = new CommentController();
