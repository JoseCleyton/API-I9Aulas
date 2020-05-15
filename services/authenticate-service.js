'use strict'

const jwt = require('jsonwebtoken');
const userRepository = require('../repository/user-repository');

exports.generateToken = async (data) => {
    return jwt.sign(data, global.SALT_KEY);
};

exports.decodeToken = async (token) => {
    let data = await jwt.verify(token, global.SALT_KEY);
    return data;
};

exports.authorize = (req, res, next) => {
    let token = req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, (error, decoded) => {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                next()
            }
        });
    }
};

exports.authenticate = (data) => {
    return userRepository.authenticate(data);
};

exports.isAdmin = (req, res, next) => {
    let token = req.headers['x-access-token']
    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, (error, decoded) => {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                if (decoded.roles.includes('admin')) {
                    next()
                } else {
                    res.status(403).json({
                        message: 'Esta funcionalidade é restrita para Administradores'
                    })
                }
            }
        });
    }
};

exports.isTeacher = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token']

    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, (error, decoded) => {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                if (decoded.roles.includes('teacher')) {
                    next()
                } else {
                    res.status(403).json({
                        message: 'Esta funcionalidade é restrita para Professores'
                    })
                }
            }
        });
    }
};