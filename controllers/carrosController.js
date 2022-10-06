const Carros = require('../model/Carros')


module.exports = class CarrosController {

    static newCarro(req, res) {
        res.render('carros/carrosform')
    }

    static async newCarroSave(req, res) {
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
        await Carros.create(Veiculo)
        res.redirect('/carros/allCarros')
    }

    static async home(req, res){
        res.render('carros/main')
    }
    static async allCarros(req, res){
        const carros = await Carros.findAll({ raw: true})
        res.render('carros/viewcarros', { carros })
    }

    static async updatecarros(req, res){
        const id = req.params.id
        const carro = await Carros.findOne({ where: { id: id }, raw: true})
        res.render('carros/edit', { carro})
    }
    static async updateCarrosSave(req, res) {
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
        await Carros.update(user, { where: { id: id } })
          .then(res.redirect('/carros/allcarros'))
          .catch((err) => {
            console.log(err)
          })
      }
    
    static async removeCarros(req, res) {
        const id = req.body.id
        await Carros.destroy({ where: { id: id } })
          .then(res.redirect('/carros/allcarros'))
          .catch((err) => {
            console.log(err)
          })
      }

}
