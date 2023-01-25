const KoaRouter = require('@koa/router')
const {verifyAuth} = require('../middleware/login.middleware')
const {create,list} = require('../controller/label.controller')

const LabelRouter = new KoaRouter({prefix:'/label'})
LabelRouter.post('/',verifyAuth,create)
LabelRouter.get('/', list)

module.exports = LabelRouter