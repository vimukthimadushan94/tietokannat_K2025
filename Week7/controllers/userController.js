const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const saltRounds = 10;

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: 'Username and password are required'
      });
    }

    const existingUser = await User.findByUsername(username);
    if (existingUser) {
      return res.status(400).json({
        message: 'Username already exists'
      });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

 
    await User.create(username, hashedPassword);

    res.status(201).json({
      message: 'User registered successfully'
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};