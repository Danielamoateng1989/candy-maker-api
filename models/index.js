const ProductsModel = require('./products')
const ManufacturersModel = require('./manufacturers')
const { Sequelize } = require('sequelize')
const connection = new Sequelize('candies', 'candy', 'C4nd13$!', {
  host: 'localhost', dialect: 'mysql'
})

const Manufacturers = ManufacturersModel(connection, Sequelize)
const Products = ProductsModel(connection, Sequelize, Manufacturers)


Products.belongsTo(Manufacturers)
Manufacturers.hasMany(Products)


module.exports = {
  Manufacturers,
  Products
}

