const bcrypt = require('bcrypt')
const server = require('../index')
const { v4: uuidv4 } = require('uuid');


const sendWelcomeMsg = (req, res) => {
        bcrypt.hash('123456', 12, function(err, hash) {
            if(err){

            } else {
                res.send(hash)
            }
        }); 
    }


const socketTest = (req, res) => {
    io.emit('test')
    res.send({"status":"socket-action"})
}
    

const login = (req, res) => {
    console.log('login')
    console.log(req.body)
        bcrypt.compare(req.body.password, '$2b$12$n7NhBk5stgg0nriQUEwp5O5hNSZDKxFQYVtC2BrktRCoV7sybO8SW', (err, result) => {
            if (err) {
            } else {
                if (result) {
                    console.log('authenticated')
                    token = uuidv4()
                    server.tokens.push([`${req.body.login}.${token}`])
                    console.log(server.tokens)
                    res.status(200)
                    res.send({
                        "token":token
                    })
                } else {
                    res.status(400)
                    res.send({"status":"failure"})
                }
            }
        }); 
           
}


module.exports = {
    sendWelcomeMsg,
    socketTest,
    login   
}