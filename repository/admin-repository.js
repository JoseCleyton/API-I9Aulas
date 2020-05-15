'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');
const Class = mongoose.model('Class');
const Student = mongoose.model('Student');
const Teacher = mongoose.model('Teacher');

exports.getUser = async () => {
    return await User.find();
};
exports.getUserById = async (id) => {
    return await User.findById({
        _id: id
    });
};
exports.getStudents = async () => {
    let students = await Student.find().populate('class', 'name')
    return students;
};
exports.getQuantityStudents = async () => {
    let quantity = await User.find({
        roles: ['student']
    }).count()
    return quantity;
};
exports.createClass = async (data) => {
    let c = new Class(data);
    return await c.save();
};
exports.addTeacher = async (data) => {
    let t = new Teacher(data);
    return await t.save();
};
exports.addStudentToClass = async (data) => {
    let c = new Class(data);
    return await c.save();
};
exports.updateClass = async (id, data) => {
    await Class.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            schedule: data.schedule,
            teacher: data.teacher,
            students: data.students
        }
    });
};
exports.getClasses = async () => {
    return await Class.find().populate('teacher').populate('students', 'name email');
};
exports.getTeachers = async () => {
    return await Teacher.find();
};
exports.newStudent = async (data) => {
    let s = new Student(data);
    return await s.save();
};
exports.updateStudent = async (id, student) => {
    await Student.findByIdAndUpdate(id, {
        $set: {
            name: student.name,
            email: student.email,
            class: student.class
        }
    });
};
exports.getStudentsById = async (id) => {
    return await Student.findById(id)
}
exports.updateUser = async (user) => {
    await User.findByIdAndUpdate(user._id, {
        $set: {
            name: user.name
        }
    })
}
