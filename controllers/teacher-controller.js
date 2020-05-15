'user strict'
const teacherRepository = require('../repository/teacher-repository');

exports.addMaterial = async (req, res, next) => {
    let material = await teacherRepository.addMaterial(req.body.material);
    if (material !== null) {
        res.status(200).send({
            material: material,
            message: 'Material adicionado com Sucesso...'
        });
    } else {
        res.status(400).send({
            material: material,
            message: 'Erro na solicitação !!! '
        });
    }
};
exports.addWork = async (req, res, next) => {
    let work = await teacherRepository.addWork(req.body.work);
    if (work !== null) {
        res.status(200).send({
            work: work,
            message: 'Atividade adicionada com Sucesso...'
        });
    } else {
        res.status(400).send({
            work: work,
            message: 'Erro na solicitação !!!'
        });
    }
};
exports.addScores = async (req, res, next) => {
    let deliverWork = await teacherRepository.addScores(req.body.deliverWork);
    res.status(200).send({
        deliverWork: deliverWork,
        message: 'Trabalho entregue com sucesso...'
    })
}