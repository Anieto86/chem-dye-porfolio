const { model, Schema } = require("mongoose");

const testimonialsSchema = new Schema({
  name: String,
  imagePath: String,
  description: String,
  role: String,
});

module.exports = model("Testimonial", testimonialsSchema);
