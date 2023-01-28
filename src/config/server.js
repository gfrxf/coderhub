const doyenv = require('dotenv')
// const SERVE_PORT = 8000


doyenv.config()

// console.log(process.env);

module.exports= {
    SERVE_PORT,
    SERVER_HOST
} = process.env




