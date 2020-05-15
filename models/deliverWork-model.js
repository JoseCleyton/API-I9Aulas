'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    id_work: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Work',
        required: true
    },
    id_student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    answer: {
        type: String
    },
    deliveryDate: {
        type: String
    },
    scores: {
        type: String
    }
});

module.exports = mongoose.model('DeliverWork', schema)