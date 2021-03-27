const { Schema, model } = require("mongoose");

const ApiKeySchema = new Schema({
  apiKey: { type: String, required: true },
});

module.exports = model("ApiKey", ApiKeySchema);
