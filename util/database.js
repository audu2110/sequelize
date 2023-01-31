const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce_shop', 'root', 'AUDUMBAR', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
