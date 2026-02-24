const db = require('./db');

const Arvosana = {

  // Get all (with JOIN to show student + course info)
  getAll: async () => {
    const [rows] = await db.query(`
      SELECT a.idArvionti,
             a.Paivamaara,
             a.Arvosana,
             o.Etunimi,
             o.Sukunimi,
             oj.Nimi AS OpintojaksoNimi,
             oj.Koodi
      FROM arviointi a
      JOIN opiskelija o ON a.idOpiskelija = o.idOpiskelija
      JOIN opintojakso oj ON a.idOpintojakso = oj.idOpintojakso
    `);
    console.log(rows);
    return rows;
  },

  // Get by ID
  getById: async (id) => {
    const [rows] = await db.query(`
      SELECT *
      FROM arviointi
      WHERE idArvionti = ?
    `, [id]);

    return rows[0];
  },

  // Create
  create: async (data) => {
    const {idArvionti, Paivamaara, Arvosana, idOpiskelija, idOpintojakso } = data;

    const [result] = await db.query(`
      INSERT INTO arviointi
      (idArvionti, Paivamaara, Arvosana, idOpiskelija, idOpintojakso)
      VALUES (?, ?, ?, ?, ?)
    `, [idArvionti, Paivamaara, Arvosana, idOpiskelija, idOpintojakso]);

    return result;
  },

  // Update
  update: async (id, data) => {
    const { Paivamaara, Arvosana, idOpiskelija, idOpintojakso } = data;

    const [result] = await db.query(`
      UPDATE arviointi
      SET Paivamaara = ?,
          Arvosana = ?,
          idOpiskelija = ?,
          idOpintojakso = ?
      WHERE idArvionti = ?
    `, [Paivamaara, Arvosana, idOpiskelija, idOpintojakso, id]);

    return result;
  },

  // Delete
  delete: async (id) => {
    const [result] = await db.query(
      'DELETE FROM arviointi WHERE idArvionti = ?',
      [id]
    );

    return result;
  }

};

module.exports = Arvosana;