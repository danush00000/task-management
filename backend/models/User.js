// backend/models/User.js
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  googleId: String,
  githubId: String,
  facebookId: String,
  email: { type: String, required: true, unique: true },
  name: String,
});
module.exports = mongoose.model('User', UserSchema);
