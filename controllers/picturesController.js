const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Picture
        .find(req.query)
        .sort({ date: -1 })
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    findById: (req, res) => {
        db.Picture
        .findById(req.params.id)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));

    },

    create: (req, res) => {
        db.Picture
        .create(req.body)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    update: (req, res) => {
        db.Picture
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    remove: (req, res) => {
        db.Picture
        .findById({_id: req.params.id})
        .then(dBModel => dBModel.remove())
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    }
};