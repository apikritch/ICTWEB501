module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    image: { type: DataTypes.STRING },
    depart: { type: DataTypes.STRING },
    to: { type: DataTypes.STRING },
    postageoption: { type: DataTypes.STRING },
    price: { type: DataTypes.STRING }
  });
  return Post;
};
