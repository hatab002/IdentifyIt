const db = require("../models");
const path = require("path");
const fs = require("fs");

module.exports = {
    findAll: (req, res) => {
        db.Picture
        .find(req.query)
        .populate("comments")
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
        .create({
            filename: req.file.filename,
            user: req.body.user
        }).then(dBModel => db.User.findByIdAndUpdate(
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
            fs.unlink(path.join("./uploads", dBModel.filename), (err) => {
                if (err) throw err;
            });
            db.User.findByIdAndUpdate( // remove from user's list of pictures
                dBModel.user,
                { $pull: { pictures: dBModel._id } }
            ).then(updatedUser => res.json(dBModel))
            .catch(err => res.status(422).json(err));
        });
    }
};