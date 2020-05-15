'user strict'
const authenticateService = require('../services/authenticate-service');
const studentRepository = require('../repository/student-repository');

exports.get = async (req, res, next) => {
    let c = req.params.class;
    let materials = await studentRepository.get(c);
    res.status(200).send({
        materials: materials
    });
}
exports.getDeliverWorksById = async (req, res, next) => {
    let deliverWork = await studentRepository.getDeliverWorksById(req.params.idDeliverWork)
    res.status(200).send({
        deliverWork: deliverWork
    })
}
exports.getDeliverWorks = async (req, res, next) => {
    let deliverWorks = await studentRepository.getDeliverWorks();
    res.status(200).send({
        deliverWorks: deliverWorks
    })
}
exports.answerWork = async (req, res, next) => {
    let deliverWork = await studentRepository.answerWork(req.body.deliverWork);
    res.status(200).send({
        deliverWorks: deliverWorks
    })
}