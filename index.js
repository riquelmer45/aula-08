const { Router } = require('express')
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const Carro = require('./routes/carrosRouter')
const conn = require('./db/conn')
const userModal = require('./model/Carros')


const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

//configuração do handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//css
app.use(express.static('public'))

//add rota carros
app.use('/carros', Carro)


//sequelize
conn
    .sync()
    .then(() => {
    app.listen(3000)
    console.log('Server Stared')
    })
    .catch((err) => {
        console.log(err)
    })



app.get('/', (req, res) => {
    res.render('/carros/main')
})

//Servidor web
// app.listen(port, () =>{
//     console.log('Server Start')
// })

