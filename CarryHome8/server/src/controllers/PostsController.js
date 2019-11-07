const { Post } = require("../models");
const { Op } = require("../models");

module.exports = {
  async getPosts(req, res) {
    try {
      let posts = null; // Stores the returned result from the database
      const search = req.query.search; // Holds the search query from the url

      // If there is a search query
      if (search) {
        // Find where title, category, author or equipment are like the search query
        // Please refer to the sequelizejs documentation for further details and examples http://docs.sequelizejs.com/manual/querying.html
        posts = await Post.findAll({
          where: {
            [Op.or]: [
              { depart: { [Op.like]: `%${search}%` } },
              { fname: { [Op.like]: `%${search}%` } },
              { lname: { [Op.like]: `%${search}%` } },
              { email: { [Op.like]: `%${search}%` } },
              { social: { [Op.like]: `%${search}%` } },
              { phoneth: { [Op.like]: `%${search}%` } },
              { phoneau: { [Op.like]: `%${search}%` } },
              { address1au: { [Op.like]: `%${search}%` } },
              { address2au: { [Op.like]: `%${search}%` } },
              { suburb: { [Op.like]: `%${search}%` } },
              { state: { [Op.like]: `%${search}%` } },
              { postcodeau: { [Op.like]: `%${search}%` } },
              { addressth: { [Op.like]: `%${search}%` } },
              { province: { [Op.like]: `%${search}%` } },
              { postcodeth: { [Op.like]: `%${search}%` } },
              { pickup: { [Op.like]: `%${search}%` } },
              { price: { [Op.like]: `%${search}%` } },
              { postopt: { [Op.like]: `%${search}%` } },
              { description: { [Op.like]: `%${search}%` } }
            ]
          }
        });
      }
      // Else there is no search query
      else {
        // Load the first 10 results
        posts = await Post.findAll({
          limit: 10
        });
      }
      res.send(posts);
    } catch (err) {
      console.log(err);
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
  },
  async putPostById(req, res) {
    try {
      const posts = await Post.update(req.body, {
        where: { id: req.params.postsId }
      });
      res.send(posts);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "An error has occurred trying to get the instruction guide by id"
      });
    }
  },
  async deletePostById(req, res) {
    try {
      await Post.destroy({
        where: { id: req.params.postsId }
      });
      res.send("success");
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "An error has occurred trying to delete the post by id"
      });
    }
  }
};
