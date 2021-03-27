const { model } = require("mongoose");

module.exports = {
  ApiKey: model("ApiKey"),
  UserCredentials: model("UserCredentials"),
};
