
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    completed: {
        type: Boolean,
        required: true,
    },

    body: {
        type: String,
        required: true,
    },
});

const PostModel = mongoose.model('post', PostSchema);

module.exports = PostModel;