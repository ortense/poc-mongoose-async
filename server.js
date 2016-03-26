'use strict';

const express    = require('express')
const app        = express()
const mongoose   = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/test')
app.set('port', process.env.PORT || 8000)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) =>
        res.send('Veja as rotas em server.js'))

const productCtrl = require('./controllers/product')
app.get('/api/product', productCtrl.getAll)
app.post('/api/product', productCtrl.create)
app.get('/api/product/:id', productCtrl.getById )

const categoryCtrl = require('./controllers/category')
app.get('/api/category', categoryCtrl.getAll)
app.post('/api/category', categoryCtrl.create)
app.get('/api/category/:id', categoryCtrl.getWithProducts)

//server
app.listen(app.get('port'), () =>
	console.log(`@see localhost:${app.get('port')}`))
