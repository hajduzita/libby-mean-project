const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String }
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);
