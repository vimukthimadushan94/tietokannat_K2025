const db = require('./db');

const User = {

  findByUsername: async (username) => {
    const [rows] = await db.query(
      'SELECT * FROM user WHERE username = ?',
      [username]
    );
    return rows[0];
  },

  create: async (username, hashedPassword) => {
    const [result] = await db.query(
      'INSERT INTO user (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );
    return result;
  }

};

module.exports = User;