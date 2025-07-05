// backend/controllers/authController.js

const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      name: user.name,
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

const googleAuthCallback = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const token = generateToken(user);

    // Redirect with token to frontend
    const redirectURL = `${process.env.CLIENT_URL}/dashboard?token=${token}`;

    res.redirect(redirectURL);
  } catch (err) {
    console.error('Google Auth Error:', err);
    res.status(500).json({ message: 'Something went wrong during authentication' });
  }
};

module.exports = {
  googleAuthCallback,
};
