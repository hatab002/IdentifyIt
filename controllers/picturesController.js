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
        .populate("comments")
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    create: (req, res) => {
        db.Picture
        .create(req.body)
        .then(dBModel => db.User.findByIdAndUpdate( // add to user's list of pictures
            dBModel.user,
            { $push: { pictures: dBModel._id } },
            { new: true },
        ).then(updatedUser => res.json(dBModel)))
        .catch(err => res.status(422).json(err));
    },

    update: (req, res) => {
        db.Picture
        .findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    remove: (req, res) => {
        db.Picture
        .findByIdAndRemove(req.params.id)
        .then(dbModel => db.User.findByIdAndUpdate( // remove from user's list of pictures
            dbModel.user,
            { $pull: { pictures: dbModel._id } }
        ).then(updatedUser => res.json(dbModel)))
        .catch(err => res.status(422).json(err));
    }
};