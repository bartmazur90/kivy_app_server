const express = require('express')
const config = require('./config/config')
const app = express()
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
const cors = require('cors')
const socket = require('socket.io')
const rateLimit = require('express-rate-limit')


app.use(cors())
app.use(bodyParser.json())
app.use(routes)

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 200
})

app.use('/user/', limiter)

tokens = []

exports.tokens = tokens


// HTTP
const server = app.listen(config.PORT, () => {
  console.log(`Example app listening at http://localhost:${config.PORT}`)
})

// HTTPS
// const server = https.createServer(options, app).listen(config.PORT);

const connections = new Set();

robotManagers = {
  FMR01:false,
  FMK01:false,
  TDJ01:false
}

io = socket(server)
io.on('connection', (s) => {
  console.log('conn')

  connections.add(s);

  s.once('disconnect', function () {
    connections.delete(s);
    console.log('disconn')
  });
})