const koa = require('koa')
const userRouter = require('../router/user.router')
const bodyParser = require('koa-bodyparser')
const loginRouter = require('../router/login.router')
const registerRouters = require('../router')
// 1.创建app
const app = new koa()

// 2.对app使用中间件
app.use(bodyParser())
registerRouters(app)
// app.use(userRouter.routes())
// app.use(userRouter.allowedMethods())
// app.use(loginRouter.routes())
// app.use(loginRouter.allowedMethods())
// 3.将app导出
module.exports = app