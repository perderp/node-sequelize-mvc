const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const indexRouter = require('./src/router/index')

require('dotenv').config()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/src'));

const db = require('./src/model/index')
db.sequelize.sync()
.then(() => {
    console.log("DATABASE SYNCED / RE-SYNCED")
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './src/views'))

app.use('/', indexRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})