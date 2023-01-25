const { OPERATION_IS_NOT_ALLOWED } = require("../config/error");
const permissionService = require("../service/permission.service");

// 验证: 验证登录用户是否有操作moment的权限
// const verifyMomentPermission = async (ctx, next) => {
//   // 1.获取登录用户的id/修改动态的id
//   const { momentId } = ctx.params;
//   const { id } = ctx.user;

//   // 2.查询user的id是否有修改momentId的权限
//   try {
//     const isPermission = await permissionService.checkMoment(momentId, id);
//     if (!isPermission) {
//       return ctx.app.emit("error", OPERATION_IS_NOT_ALLOWED, ctx);
//     }

//     // 3.执行下一个中间件
//     await next();
//   } catch (err) {
//     console.log(err);
//   }
// };
// const verifyPermission = function(resouce){
//   return async(ctx,next) =>{
//       // 1.获取登录用户的id/修改动态的id
//   const { momentId } = ctx.params;
//   const { id } = ctx.user;

//   // 2.查询user的id是否有修改momentId的权限
//   try {
//     const isPermission = await permissionService.checkMoment(momentId, id);
//     if (!isPermission) {
//       return ctx.app.emit("error", OPERATION_IS_NOT_ALLOWED, ctx);
//     }

//     // 3.执行下一个中间件
//     await next();
//   } catch (err) {
//     console.log(err);
//   }
//   }
// }

const verifyPermission = async (ctx,next) =>{
    // 1.获取登录用户的id
    const { id } = ctx.user
     // 2.获取资源的name/id
  // name => moment/user/comment/label
  // params: { momentId: 4 }
  // keyName => momentId
  console.log(ctx.params);
  const keyName = Object.keys(ctx.params)[0]
  const resourceId = ctx.params[keyName]
  const resourceName = keyName.replace('Id','')

  // 2.查询user的id是否有修改momentId的权限
  console.log(resourceName,resourceId,id);
  const isPermission = await permissionService.checkResouce(resourceName, resourceId, id)
  if (!isPermission) {
    return ctx.app.emit('error', OPERATION_IS_NOT_ALLOWED, ctx)
  }

  // 3.执行下一个中间件
  await next()
}
module.exports = {
  // verifyMomentPermission,
  verifyPermission
};
