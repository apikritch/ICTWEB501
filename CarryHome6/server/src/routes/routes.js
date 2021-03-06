const AuthenticationController = require("./../controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./../policies/AuthenticationControllerPolicy");
const PostsController = require("./../controllers/PostsController");

module.exports = app => {
  app.get("/status", (req, res) => {
    res.send({ message: "hello world" });
  });

  app.post(
    "/signup",
    AuthenticationControllerPolicy.signup,
    AuthenticationController.signup
  );

  app.post("/login", AuthenticationController.login);

  app.get("/posts", PostsController.getAllPosts);
  app.post("/posts", PostsController.postPosts);
};
