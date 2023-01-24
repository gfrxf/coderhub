class CommentController {
  async create(ctx, next) {
    // 1.获取动态的内容
    const { content } = ctx.request.body;
    // 2.动态由谁发布(token => id/name)
    
    // 3.将动态相关的数据保存到数据库
  }
}
module.exports = new CommentController();
