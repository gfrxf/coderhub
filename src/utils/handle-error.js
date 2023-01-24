const app = require('../app')
const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS, NAME_IS_NOT_EXISTS, PASSWORD_IS_INCORRENT, UNAUTHORIZATION, OPERATION_IS_NOT_ALLOWED } = require('../config/error')

app.on('error', (error, ctx) => {
  let code = 0
  let message = ''

  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名或者密码不能为空~'
      break
    case NAME_IS_ALREADY_EXISTS:
      code = -1002
      message = '用户名已经被占用, 请输入新的用户名~'
      break
    case NAME_IS_NOT_EXISTS:
      code = -1003
      message = '用户名不存在, 请检测用户名~'
      break
    case PASSWORD_IS_INCORRENT:
      code = -1004
      message = '输入的密码错误, 请检测密码~'
      break
    case UNAUTHORIZATION:
      code = -1005
      message = '无效的token或者token已经过期~'
      break
    case OPERATION_IS_NOT_ALLOWED:
      code = -2001
      message = '没有操作该资源的权限~'
      break
  }

  ctx.body = { code, message }
})