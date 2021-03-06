const Products = (connection, Sequelize, Manufacturers) => {
  return connection.define('products',
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
      name: { type: Sequelize.STRING },
      yearIntroduced: { type: Sequelize.DATE },
      manufacturerId: { type: Sequelize.INTEGER, references: { model: Manufacturers, Key: 'id' } },

    }, { paranoid: true })
}

module.exports = Products
