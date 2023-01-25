const UserService = require("../service/user.service");
const fileService = require('../service/file.service')
const { UPLOAD_PATH } = require('../config/path')
const fs = require("fs");
class UserController {
  async create(ctx, next) {
    // 获取用户传递过来的数据
    const user = ctx.request.body;
    console.log(user);

    // 将user信息存储到数据库中
    const result = await UserService.create(user);
    // 查看存储的结果告知前端创建成功
    ctx.body = {
      message: "创建用户成功",
      data: result,
    };
  }

  async showAvatarImage(ctx, next) {
    // 1.获取用户的id
    const { userId } = ctx.params;
    // 2.获取userId对应的头像信息
    try {
      const avatarInfo = await fileService.queryAvatarWithUserId(userId);
      // 3.读取头像所在的文件
      const { filename, mimetype } = avatarInfo;
      ctx.type = mimetype;
      ctx.body = fs.createReadStream(`${UPLOAD_PATH}/${filename}`);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new UserController();
