'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    class: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class',
            required: true
        }
    ]
});

module.exports = mongoose.model('Teacher', schema)