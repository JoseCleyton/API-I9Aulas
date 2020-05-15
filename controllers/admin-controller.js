'use strict'

const adminRepository = require('../repository/admin-repository');


exports.getUser = async (req, res, next) => {
    let users = await adminRepository.getUser();
    res.status(200).send({
        users: users
    })
};
exports.getStudents = async (req, res, next) => {
    let students = [];
    students = await adminRepository.getStudents();
    res.status(200).send({
        students
    })
};
exports.getQuantityStudents = async (req, res, next) => {
    let quantity = await adminRepository.getQuantityStudents();
    res.status(200).send({
        quantity: quantity
    })
};
exports.createClass = async (req, res, next) => {
    try {
        await adminRepository.createClass({
            name: req.body.name,
            schedule: req.body.schedule,
            teacher: req.body.teacher,
            students: req.body.students
        })
        res.status(201).send({
            message: "Turma cadastrada com sucesso"
        })

    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: "Erro no cadastro do Usário",
            data: e
        })

    }
};
exports.addTeacher = async (req, res, next) => {
    try {
        await adminRepository.addTeacher({
            name: req.body.name,
            email: req.body.email
        })
        res.status(201).send({
            message: "Professor cadastrado com sucesso"
        })
    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: "Erro no cadastro do Professor",
            data: e
        })

    }
};

exports.addStudentToClass = async (req, res, next) => {
    try {
        await adminRepository.addStudentToClass({
            class: req.body.class
        })
        res.status(201).send({
            message: "Class atualizada com sucesso"
        })

    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: "Erro ao adicionar Estudante na Turma",
            data: e
        })

    }
};

exports.getClasses = async (req, res, next) => {
    let classes = await adminRepository.getClasses();
    res.status(200).send({
        classes: classes
    })
};
exports.getTeachers = async (req, res, next) => {
    let teachers = await adminRepository.getTeachers();
    res.status(200).send({
        teachers: teachers
    })
};
exports.updateClass = async (req, res, next) => {
    try {
        await adminRepository.updateClass(req.body.id, req.body.class)
        res.status(201).send({
            message: "Turma atualizada com sucesso"
        })

    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: "Erro ao atualizar Aluno",
            data: e
        })

    }
};
exports.newStudent = async (req, res, next) => {
    try {
        let student = await adminRepository.newStudent({
            class: req.body.class,
            user: req.body.user,
            name: req.body.name,
            email: req.body.email
        })
        res.status(201).send({
            message: "Aluno cadastrado com sucesso",
            student: student
        })

    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: "Erro no cadastro do Usário",
            data: e
        })

    }
};
exports.updateStudent = async (req, res, next) => {
    try {

        await adminRepository.updateStudent(req.body.id, req.body.student)
        res.status(201).send({
            message: "Aluno atualizado com sucesso"
        })

    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: "Erro ao adicionar Estudante na Turma",
            data: e
        })

    }
};
