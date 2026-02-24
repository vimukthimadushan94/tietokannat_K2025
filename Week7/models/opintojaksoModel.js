const db = require('./db');

const Opintojakso = {

  // Get all
  getAll: async () => {
    const [rows] = await db.query(
      'SELECT * FROM opintojakso'
    );
    return rows;
  },

  // Get by ID
  getById: async (id) => {
    const [rows] = await db.query(
      'SELECT * FROM opintojakso WHERE idOpintojakso = ?',
      [id]
    );
    return rows[0];
  },

  // Create
  create: async (data) => {
    const { idOpintojakso,Koodi, Laajuus, Nimi } = data;

    const [result] = await db.query(
      `INSERT INTO opintojakso 
       (idOpintojakso, Koodi, Laajuus, Nimi) 
       VALUES (?, ?, ?, ?)`,
      [idOpintojakso, Koodi, Laajuus, Nimi]
    );

    return result;
  },

  // Update
  update: async (id, data) => {
    const { Koodi, Laajuus, Nimi } = data;

    const [result] = await db.query(
      `UPDATE opintojakso
       SET Koodi = ?, 
           Laajuus = ?, 
           Nimi = ?
       WHERE idOpintojakso = ?`,
      [Koodi, Laajuus, Nimi, id]
    );

    return result;
  },

  // Delete
  delete: async (id) => {
    const [result] = await db.query(
      'DELETE FROM opintojakso WHERE idOpintojakso = ?',
      [id]
    );

    return result;
  }

};

module.exports = Opintojakso;