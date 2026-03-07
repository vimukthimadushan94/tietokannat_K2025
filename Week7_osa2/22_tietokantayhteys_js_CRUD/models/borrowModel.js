const db = require('./db');

const borrower = {

    getAll: async function(callback) {
        try {
            const [rows] = await db.query("SELECT * FROM borrower");
            callback(null, rows);
        } catch (err) {
            callback(err, null);
        }
    },

    getOne: async function(id, callback) {
        try {
            const [rows] = await db.query(
                "SELECT * FROM borrower WHERE id_borrower = ?",
                [id]
            );
            callback(null, rows);
        } catch (err) {
            callback(err, null);
        }
    },

    add: async function(data, callback) {
        try {
            const [result] = await db.query(
                "INSERT INTO borrower (fname, lname, streetaddress) VALUES (?, ?, ?)",
                [data.fname, data.lname, data.streetaddress]
            );
            callback(null, result);
        } catch (err) {
            callback(err, null);
        }
    },

    delete: async function(id, callback) {
        try {
            const [result] = await db.query(
                "DELETE FROM borrower WHERE id_borrower = ?",
                [id]
            );
            callback(null, result);
        } catch (err) {
            callback(err, null);
        }
    },

    update: async function(id, data, callback) {
        try {
            const [result] = await db.query(
                "UPDATE borrower SET fname = ?, lname = ?, streetaddress = ? WHERE id_borrower = ?",
                [data.fname, data.lname, data.streetaddress, id]
            );
            callback(null, result);
        } catch (err) {
            callback(err, null);
        }
    }

};

module.exports = borrower;