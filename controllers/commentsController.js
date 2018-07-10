const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Comment
            .find(req.query)
            .sort({ date: -1 })
            .then(dBModel => res.json(dBModel))
            .catch(err => res.status(422).json(err));
    },

    findById: (req, res) => {
        db.Comment
        .findById(req.params.id)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));

    },

    create: (req, res) => {
        db.Comment
        .create(req.body)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    update: (req, res) => {
        db.Comment
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    remove: (req, res) => {
        db.Comment
        .findById({_id: req.params.id})
        .then(dBModel => dBModel.remove())
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    }
};