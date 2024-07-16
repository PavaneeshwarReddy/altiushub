const mongoose = require("mongoose")
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date, author :String}],
  date: { type: Date, default: Date.now },
  draft: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

const blogModel = mongoose.model('blogs',blogSchema);
module.exports = blogModel;