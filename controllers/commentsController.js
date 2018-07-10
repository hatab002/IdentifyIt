const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Comments
            .find(req.query)
            .sort({ date: -1 })
            .then(dBModel => res.json(dBModel))
            .catch(err => res.status(422).json(err));
    },

    findById: (req, res) => {
        db.Comments
        .findById(req.params.id)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));

    },

    create: (req, res) => {
        db.Comments
        .create(req.body)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    update: (req, res) => {
        db.Comments
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    remove: (req, res) => {
        db.Comments
        .findById({_id: req.params.id})
        .then(dBModel => dBModel.remove())
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    }
};