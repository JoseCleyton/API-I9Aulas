'user strict'

//const autheticateRepository = require('../repositories/autenticacao-repository')
const md5 = require('md5')
const authenticateService = require('../services/authenticate-service')


exports.authenticate = async (req, res, next) => {

    try {
        const user = await authenticateService.authenticate({
            login: req.body.login,
            password: md5(req.body.password + global.SALT_KEY),
        });


        if (!user) {
            res.status(404).send({
                message: "E-mail ou Senha inválidos"
            });
            return
        }
        const token = await authenticateService.generateToken({
            id: user._id,
            roles: user.roles,
            login: user.login,
            password: user.password
        });

        res.status(201).send({
            token: token,
            roles: user.roles
        })

    } catch (e) {
        res.status(500).send({
            message: "Erro na solicitação",
            data: e
        });
    }
}

exports.generatedToken = async (req, res, next) => {

    try {
        await authenticateService.saveUser({
            email: req.body.email,
            senha: md5(req.body.senha + global.SALT_KEY)
        }
        )

        let token = await authenticateService.generateToken(
            {
                email: req.body.email,
                senha: md5(req.body.senha + global.SALT_KEY)
            }
        )
        res.status(201).send({
            token: token,
            message: 'Token criado com sucesso'
        })


    } catch (e) {
        res.status(500).send({
            message: "Erro na solicitação",
            data: e
        });
    }
}
