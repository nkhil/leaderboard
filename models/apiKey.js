const { Schema, model } = require("mongoose");

const ApiKeySchema = new Schema({
  userId: { type: String, required: true, unique: true },
  clientId: { type: String, required: true, unique: true },
  clientSecretHash: { type: String, required: true },
  apiKeyHash: { type: String, required: true },
});

module.exports = model("ApiKey", ApiKeySchema);
