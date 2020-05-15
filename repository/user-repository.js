'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.authenticate = async (data) => {
    const res = await User.findOne({
        login: data.login,
        password: data.password
    });
    return res;
}

exports.saveUser = async (data) => {
    let user = new User(data)
    return await user.save()
}