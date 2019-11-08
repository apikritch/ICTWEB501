const { UserInfo } = require("../models");

module.exports = {
  async postUserInfoById(req, res) {
    try {
      const userInfo = await UserInfo.create({
        phoneau: req.body.phoneau,
        phoneth: req.body.phoneth,
        social: req.body.social,
        userId: req.params.usersId
      });
      console.log(userInfo);
      res.send(userInfo);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "An error has occurred trying to post a use info"
      });
    }
  }
};
