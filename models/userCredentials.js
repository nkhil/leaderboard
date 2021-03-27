const mongoose = require("mongoose");
// const { ApiKey } = require('./apiKey');

const UserCredentialSchema = new mongoose.Schema({
  clientId: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
  clientSecretHash: { type: String, required: true },
  apiKeys: [{ apiKey: String }],
});

module.exports = mongoose.model("UserCredentials", UserCredentialSchema);
