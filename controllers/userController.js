const User = require('../model/User')


module.exports = class UserController {

    static newUser(req, res) {
        res.render('users/userform')
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
        res.redirect('/users/allUsers')
    }

    static async home(req, res){
        res.render('users/main')
    }
    static async allUsers(req, res){
        const users = await User.findAll({ raw: true})
        res.render('users/viewuser', { users })
    }

    static async updateUser(req, res){
        const id = req.params.id
        const user = await User.findOne({ where: { id: id }, raw: true})
        res.render('users/edit', { user})
    }
    static async updateUserSave(req, res) {
        const id = req.body.id
        const user = {
            name: req.body.name,
            ano: req.body.ano,
            modelo: req.body.modelo,
            motor: req.body.motor,
            fabricante: req.body.fabricante,
            cor: req.body.cor,
            valor: req.body.valor,
            opcionais: req.body.opcionais
        }
        await User.update(user, { where: { id: id } })
          .then(res.redirect('/users/allUsers'))
          .catch((err) => {
            console.log(err)
          })
      }
    
    static async removeUser(req, res) {
        const id = req.body.id
        await User.destroy({ where: { id: id } })
          .then(res.redirect('/users/allUsers'))
          .catch((err) => {
            console.log(err)
          })
      }

}
