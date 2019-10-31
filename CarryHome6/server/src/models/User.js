module.exports = (sequelize, DataTypes) =>
  sequelize.define("User", {
    fname: {
      type: DataTypes.STRING
    },
    lname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    password2: {
      type: DataTypes.STRING
    }
  });
