const connection = require("../app/database")


class PermissionService {
    async checkMoment(momentId, userId) {
        const statement = 'SELECT * FROM moment WHERE id = ? AND user_id = ?;';
        const [result] = await connection.execute(statement, [momentId, userId])
        return !!result.length
      }

      async checkResouce(resourceName, resourceId, userId) {
        const statement = `SELECT * FROM ${resourceName} WHERE id = ? AND user_id = ?;`;
        const [result] = await connection.execute(statement, [resourceId, userId])
        return !!result.length
      }
}

module.exports = new PermissionService()