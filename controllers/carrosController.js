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
        const carros = await Carros.findOne({ where: { id: id }, raw: true})
        res.render('carros/edit', { carros })
    }
    static async updateCarrosSave(req, res) {
        const id = req.body.id
        const carros = {
            name: req.body.name,
            ano: req.body.ano,
            modelo: req.body.modelo,
            motor: req.body.motor,
            fabricante: req.body.fabricante,
            cor: req.body.cor,
            valor: req.body.valor,
            opcionais: req.body.opcionais
        }
        await Carros.update(carros, { where: { id: id } })
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
