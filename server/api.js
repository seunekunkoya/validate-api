const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const { verifyJson } = require('./helper/json.check')

const Routes = require('./routes')

const app = express()
const port = process.env.NODE_ENV || 5000

app.set('post', port)

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//verify JSON helps to check if the payload is JSON

app.use('/', verifyJson, Routes)

app.listen(port, () => { console.log(`App running on port ${port}`)})
