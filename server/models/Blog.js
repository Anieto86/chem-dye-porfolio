const { model, Schema } = require("mongoose");

const blogSchema = new Schema({
  title: String,
  imagePath: String,
  subTitle: String,
  link: String,
  likes: Number,
  views: Number,
});

module.exports = model("Blog", blogSchema);
