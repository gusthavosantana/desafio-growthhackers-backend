/* eslint-disable @typescript-eslint/no-var-requires */
const Sequelize = require('sequelize');
const configs = require('../config');
const { Category } = require('../../../../category/category.model');
const { Product } = require('../../../../product/product.model');

const env = process.env.NODE_ENV || 'development';
const config = configs[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

db[Category.name] = Category;
db[Product.name] = Product;

db['sequelize'] = sequelize;
db['Sequelize'] = Sequelize;

module.exports = db;
