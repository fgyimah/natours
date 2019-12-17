const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name']
  },
  email: {
    type: String,
    required: [true, 'A user must have an email'],
    unique: true,
    lowercase: true,
    validate: [validator.email, 'Please provide a valid email address']
  },
  photo: {
    type: String
  },
  password: {
    type: String,
    required: [true, 'A user must have a password']
  },
  passwordConfirmation: String
});

module.exports = mongoose.model('User', userSchema);
