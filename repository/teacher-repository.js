const mongoose = require('mongoose');
const Material = mongoose.model('Material');
const Work = mongoose.model('Work');
const DeliverWork = mongoose.model('DeliverWork');
const User = mongoose.model('User');

exports.addMaterial = async (data) => {
    let material = new Material(data);
    return await material.save();
};
exports.addWork = async (data) => {
    let work = new Work(data);
    return await work.save();
};
exports.addScores = async (data) => {
    let deliverWorkAux = new DeliverWork(data);
    return await deliverWorkAux.save();
};