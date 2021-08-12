const { model, Schema } = require("mongoose");

const portfolioSchema = new Schema({
  imagePath: String,
  name: String,
});

module.exports = model("Portfolio", portfolioSchema);
