var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  author: String,
  title: String,
  description: String,
  date: String,
  image: String
});

module.exports = mongoose.model('Article', articleSchema);
