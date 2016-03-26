'use strict';

module.exports = (model, custom) =>
    Object.assign(
        custom || {},
        {
            getAll: (req, res) =>
                model.find({}, (err, data) =>
                    res.json(err || data)),

            getById: (req, res) =>
                model.findOne({_id: req.params.id}, (err, data) =>
                    res.json(err || data)),

            create: (req, res) => {
                delete req.body._id
                let body = req.body
                let item = new model(body)
                item.save(err =>
                    res.json(err || {success: true}))
            }
        }
    )
