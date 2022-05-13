import { SequelizeModuleOptions } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize/types';
import { Category } from 'src/category/category.model';
import { Product } from 'src/product/product.model';

dotenv.config();

type DatabaseConfig = {
  [key: string]: SequelizeModuleOptions;
};

const config: DatabaseConfig = {
  development: {
    dialect: process.env.DB_DIALECT as Dialect,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    models: [Category, Product],
  },
  test: {
    dialect: process.env.DB_DIALECT as Dialect,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    database: 'fiocruz_test',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    models: [Category, Product],
  },
  production: {
    dialect: process.env.DB_DIALECT as Dialect,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    models: [Category, Product],
  },
};

const env = process.env.NODE_ENV || 'development';

export default config[env];
