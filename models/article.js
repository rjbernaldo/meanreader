var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  author: String,
  categories: String,
  comments: String,
  date: String,
  createdAt: {
    type: Date,
    expires: 86400,
    default: Date.now
  },
  title: String,
  summary: String
});

module.exports = mongoose.model('Article', articleSchema);
