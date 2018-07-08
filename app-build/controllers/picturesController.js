const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Pictures
        .find(req.query)
        .sort({ date: -1 })
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    findById: (req, res) => {
        db.Pictures
        .findById(req.params.id)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));

    },

    create: (req, res) => {
        db.Pictures
        .create(req.body)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    update: (req, res) => {
        db.Pictures
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    remove: (req, res) => {
        db.Pictures
        .findById({_id: req.params.id})
        .then(dBModel => dBModel.remove())
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    }
};