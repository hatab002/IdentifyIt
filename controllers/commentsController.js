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
        .then(dBModel => db.Picture.findByIdAndUpdate( // add to picture's list of comments
            dBModel.picture,
            { $push: { comments: dBModel._id } },
            { new: true }
        ).then(updatedPicture => db.User.findByIdAndUpdate( // add to user's list of comments
           dBModel.user,
           { $push: { comments: dBModel._id } },
           { new: true } 
        ).then(updatedUser => res.json(dBModel))))
        .catch(err => res.status(422).json(err));
    },

    update: (req, res) => {
        db.Comment
        .findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    remove: (req, res) => {
        db.Comment
        .findByIdAndRemove(req.params.id)
        .then(dBModel => db.Picture.findByIdAndUpdate( // remove from picture's list of comments
            dBModel.picture,
            { $pull: { comments: dBModel._id } }
        ).then(updatedPicture => db.User.findByIdAndUpdate( // remove from user's list of comments
            dBModel.user,
            { $pull: { comments: dBModel._id } }
        ).then(updatedUser => res.json(dBModel))))
        .catch(err => res.status(422).json(err));
    }
};