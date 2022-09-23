const { Datatypes, DataTypes } = require('sequelize')
const db = require('../db/conn')

const Carros = db.define('Carros', {
    name: {
        Type: DataTypes.STRING,
        required: true
    },
    ano: {
        Type: DataTypes.INTEGER,
        required: true
    },
    modelo: {
        Type: DataTypes.STRING,
        required: true
    },
    motor: {
        Type: DataTypes.STRING,
        required: true
    },
    fabricante: {
        Type: DataTypes.STRING,
        required: true
    },
    cor: {
        Type: DataTypes.STRING,
        required: true
    },
    Valor: {
        Type: DataTypes.INTEGER,
        required: true
    },
    opcionais: {
        Type: DataTypes.STRING,
        required: true
    }
})