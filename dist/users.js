export default (sequelize, DataTypes) => {
  let Users = sequelize.define('users', {
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    name: {
      type: DataTypes.STRING,
    },
  });

  return Users;
};