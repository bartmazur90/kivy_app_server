const server = require('../index')
const config = require('../config/config')


const verifyApiKey = (req, res, next) => {
    if (req.headers['api-key'] == config.API_KEY){
        next()
    } else {
        res.send('NOT AUTHORIZED')
    }
}


const confirmToken = (req, res, next) => {
    let auth = false
    for (var i = 0; i <= server.tokens.length; i++){
        if (server.tokens[i]== req.body.token && req.body.token != undefined){
            // console.log(`REQ TOKEN: ${req.body.token}`)
            auth = true
            next()
        }
    }
    if (!auth){
        res.status(401).send({"status":"unathorized"})
    }
}


module.exports = {
    verifyApiKey,
    confirmToken
}


