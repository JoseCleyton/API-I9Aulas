'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [
        {
            type: String,
            required: true,
            enum: ['student', 'admin', 'teacher'],
            default: 'student'
        }
    ],
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('User', schema)