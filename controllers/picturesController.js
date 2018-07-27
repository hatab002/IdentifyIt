const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Picture
        .find({})
        .populate({
            path: "comments",
            populate: { 
                path: "user",
                select: "username"
            }
        })
        .sort({ date: -1 })
        .then(dBModel => {console.log(dBModel);res.json(dBModel)})
        .catch(err => res.status(422).json(err));
    },

    findById: (req, res) => {
        db.Picture
        .findById(req.params.id)
        .populate({
            path: "comments",
            populate: { 
                path: "user",
                select: "username"
            }
        })
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    create: (req, res) => {
        db.Picture
        .create(req.body)
        .then(dBModel => db.User.findByIdAndUpdate(
            dBModel.user,
            { $push: { pictures: dBModel._id } },
            { new: true}
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
        .then(dBModel => {
            db.User.findByIdAndUpdate( // remove from user's list of pictures
                dBModel.user,
                { $pull: { pictures: dBModel._id } }
            ).then(updatedUser => res.json(dBModel))
            .catch(err => res.status(422).json(err));
        });
    }
};