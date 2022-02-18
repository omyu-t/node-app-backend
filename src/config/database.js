import { Sequelize, DataTypes } from 'sequelize';
import Users from '../models/users';

const models = {};
const modules = [
  Users,
];

const sequelize = new Sequelize('react_express_db', 'root', 'root', {
    host: 'db',
    dialect: 'mariadb',
});

modules.forEach(module => {
  const model = module(sequelize, DataTypes);
  models[model.name] = model;
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database.');
    console.log(err);
  });

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;