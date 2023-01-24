// 1.导入app
const app = require("./app/index");

const { SERVE_PORT } = require("./config/server");
require('./utils/handle-error')
// 2.将app启动起来
app.listen(SERVE_PORT, () => {
  console.log("coderhub的服务器启动成功");
});
