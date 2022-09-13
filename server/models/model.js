const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  News_title: {
    required: true,
    type: String,
  },
  News_body: {
    required: true,
    type: String,
  },
  News_category: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Data", dataSchema);
