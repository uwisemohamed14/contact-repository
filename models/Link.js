const mongoose = require('mongoose');

const LinkSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    about: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    }

});

module.exports = mongoose.model('link', LinkSchema);