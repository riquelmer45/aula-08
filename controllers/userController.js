const User = require('../model/User')


module.exports = class UserController {

    static createUser(req, res) {
        res.render('/user/userform')
    }

    static async newUserSave(req, res) {
        const Veiculo = {
            name: req.body.name,
            ano: req.body.ano,
            modelo: req.body.modelo,
            motor: req.body.motor,
            fabricante: req.body.fabricante,
            cor: req.body.cor,
            valor: req.body.valor,
            opcionais: req.body.opcionais
        }
        await User.create(Veiculo)

        res.redirect('/main')
    }


}
