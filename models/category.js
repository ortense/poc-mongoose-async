'use strict';

const mongoose = require('mongoose')
const schema   = mongoose.Schema({ name: String })

module.exports = mongoose.model('category', schema)
