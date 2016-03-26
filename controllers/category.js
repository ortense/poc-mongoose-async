'use strict';

const factory = require('./factory')
const model   = require('../models/category')
const product = require('../models/product')
const async   = require('async')

module.exports = factory(model, {
    getWithProducts: (req, res) => {
        async.parallel({
                category: cb => model.findOne({_id: req.params.id}, cb),
                products: cb => product.find({categoryId: req.params.id}, cb)
            },
            (err, results) => res.json(err || results)
            // tratar resposta
        )
    }
})
