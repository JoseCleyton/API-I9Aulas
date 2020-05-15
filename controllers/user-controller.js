'user strict'

const userRespository = require('../repository/user-repository');
const md5 = require('md5');


exports.newUser = async (req, res, next) => {
    try {
        let user = await userRespository.saveUser({
            login: req.body.login,
            password: md5(req.body.password + global.SALT_KEY),
            name: req.body.name,
            roles: req.body.roles,
            active: req.body.active
        })
        res.status(201).send({
            message: "Usuário cadastrado com sucesso",
            user: user
        })

    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: "Erro no cadastro do Usário",
            data: e
        })

    }
};