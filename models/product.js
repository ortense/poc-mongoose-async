'use strict';

const mongoose = require('mongoose')

const schema   = mongoose.Schema({
    name: String,
    price: Number,
    categoryId: String
})

module.exports = mongoose.model('product', schema)
