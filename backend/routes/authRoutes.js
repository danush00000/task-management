const express = require('express');
const passport = require('passport');
const router = express.Router();
const { googleAuthCallback } = require('../controllers/authController');

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  googleAuthCallback
);

module.exports = router;