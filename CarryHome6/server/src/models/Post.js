module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    fname: { type: DataTypes.STRING },
    lname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    social: { type: DataTypes.STRING },
    phoneth: { type: DataTypes.INTEGER },
    phoneau: { type: DataTypes.INTEGER },
    address1au: { type: DataTypes.STRING },
    address2au: { type: DataTypes.STRING },
    suburb: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    postcodeau: { type: DataTypes.INTEGER },
    addressth: { type: DataTypes.STRING },
    province: { type: DataTypes.STRING },
    postcodeth: { type: DataTypes.INTEGER },
    pickup: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    postopt: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT }
  });
  return Post;
};
