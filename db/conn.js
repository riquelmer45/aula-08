const Sequelize = require('sequelize')

const sequelize = new Sequelize('carro', 'root', '123',{
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Database Started')

} catch (error) {
    console.log('Database not connected!')
}

module.exports = sequelize