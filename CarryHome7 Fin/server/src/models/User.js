const bcrypt = require("bcrypt");

async function hashPassword(user) {
  if (!user.changed("password") && !user.changed("password2")) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashPasswordValue = await bcrypt.hash(user.password, salt);
  const hashPassword2Value = await bcrypt.hash(user.password2, salt);
  user.setDataValue("password", hashPasswordValue);
  user.setDataValue("password2", hashPassword2Value);
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
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
    },
    {
      hooks: {
        beforeSave: hashPassword
      }
    }
  );

  User.prototype.comparePassword = async function(password) {
    try {
      const validPassword = await bcrypt.compare(password, this.password);
      return validPassword;
    } catch (error) {
      console.log("Wrong Password" + error);
    }
  };
  return User;
};
