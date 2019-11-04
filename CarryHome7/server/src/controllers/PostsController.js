const { Post } = require("../models");

module.exports = {
  async getAllPosts(req, res) {
    try {
      const post = await Post.findAll({
        limiy: 10
      });
      res.send(post);
    } catch (err) {
      res.status(500).send({
        error: "An error has occurred trying to get all Posts"
      });
    }
  },
  async postPosts(req, res) {
    try {
      const post = await Post.create(req.body);
      res.send(post);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "An error has occurred trying to post a new Post"
      });
    }
  },
  async getPostById(req, res) {
    try {
      const posts = await Post.findOne({
        where: { id: req.params.postsId }
      });
      res.send(posts);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "An error has occurred trying to get the instruction guide by id"
      });
    }
  }
};
