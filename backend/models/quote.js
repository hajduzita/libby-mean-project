const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
  author: { type: String },
  bookTitle: { type: String },
  quote: { type: String },
  page: { type: Number },
  publisher: { type: String },
  publishYear: { type: Number },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Quote', quoteSchema);
