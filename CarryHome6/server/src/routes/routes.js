const AuthenticationController = require("./../controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./../policies/AuthenticationControllerPolicy");

module.exports = app => {
  app.get("/status", (req, res) => {
    res.send({ message: "hello world" });
  });

  app.post(
    "/signup",
    AuthenticationControllerPolicy.signup,
    AuthenticationController.signup
  );
};
