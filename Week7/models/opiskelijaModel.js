const db = require('./db');

const Opiskelija = {

  // Get all students
  getAll: async () => {
    const [rows] = await db.query(
      'SELECT * FROM opiskelija'
    );
    return rows;
  },

  // Get student by ID
  getById: async (id) => {
    const [rows] = await db.query(
      'SELECT * FROM opiskelija WHERE idOpiskelija = ?',
      [id]
    );
    return rows[0];
  },

  // Create new student
  create: async (data) => {
    const { idOpiskelija, Etunimi, Sukunimi, Osoite, Luokkatunnus } = data;

    const [result] = await db.query(
      `INSERT INTO opiskelija 
       (idOpiskelija, Etunimi, Sukunimi, Osoite, Luokkatunnus) 
       VALUES (?, ?, ?, ?, ?)`,
      [idOpiskelija, Etunimi, Sukunimi, Osoite, Luokkatunnus]
    );

    return result;
  },

  // Update student
  update: async (id, data) => {
    const { Etunimi, Sukunimi, Osoite, Luokkatunnus } = data;

    const [result] = await db.query(
      `UPDATE opiskelija 
       SET Etunimi = ?, 
           Sukunimi = ?, 
           Osoite = ?, 
           Luokkatunnus = ?
       WHERE idOpiskelija = ?`,
      [Etunimi, Sukunimi, Osoite, Luokkatunnus, id]
    );

    return result;
  },

  // Delete student
  delete: async (id) => {
    const [result] = await db.query(
      'DELETE FROM opiskelija WHERE idOpiskelija = ?',
      [id]
    );

    return result;
  }

};

module.exports = Opiskelija;