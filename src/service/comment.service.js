const connection = require("../app/database")

class CommentService{
async create(content,momentId,id){
    // console.log(content,momentId,id);
    const statement = 'INSERT INTO comment (content,moment_id,user_id) VALUES (?,?,?);';
try{
    const [result] = await  connection.execute(statement,[content,momentId,id])
    return result
}catch(err){
    console.log(err);
}
}
async reply(content, momentId, commentId, userId) {
    console.log(content, momentId, commentId, userId);
    try{
        
        const statement = 'INSERT INTO comment (content, moment_id, comment_id, user_id) VALUES (?, ?, ?, ?);';
        const [result] = await connection.execute(statement, [content, momentId, commentId, userId])
        return result
    }catch(err){
        console.log(err);
    }
   
  }
}

module.exports = new CommentService()