'use strict'

const mongoose = require('mongoose');
const Material = mongoose.model('Material');
const DeliverWork = mongoose.model('DeliverWork')
exports.get = async (c) => {
    let videos = await Material.find({
        class: c
    });
    return videos;
};
exports.getDeliverWorksById = async (idDeliverWork) => {
    return await DeliverWork.findById(idDeliverWork);
};
exports.getDeliverWorks = async () => {
    return await DeliverWork.find();
};
exports.answerWork = async (deliverWork) => {
    let deliverWorkAux = new DeliverWork(deliverWork);
    return await deliverWorkAux.save();
};