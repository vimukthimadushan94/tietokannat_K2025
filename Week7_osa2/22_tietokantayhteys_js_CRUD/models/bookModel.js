const db = require('./db');

const book = {

 
    getAll: async function(callback) {
        try {
            const [rows] = await db.query("SELECT * FROM book");
            callback(null, rows);
        } catch (err) {
            callback(err, null);
        }
    },

    getOne: async function(id, callback) {
        try {
            const [rows] = await db.query(
                "SELECT * FROM book WHERE id_book = ?",
                [id]
            );
            callback(null, rows);
        } catch (err) {
            callback(err, null);
        }
    },


    add: async function(bookData, callback) {
        try {
            const [result] = await db.query(
                "INSERT INTO book (name, auther, isbn) VALUES (?, ?, ?)",
                [bookData.name, bookData.auther, bookData.isbn]
            );
            callback(null, result);
        } catch (err) {
            callback(err, null);
        }
    },

    delete: async function(id, callback) {
        try {
            const [result] = await db.query(
                "DELETE FROM book WHERE id_book = ?",
                [id]
            );
            callback(null, result);
        } catch (err) {
            callback(err, null);
        }
    },

 
    update: async function(id, bookData, callback) {
        try {
            const [result] = await db.query(
                "UPDATE book SET name = ?, auther = ?, isbn = ? WHERE id_book = ?",
                [bookData.name, bookData.auther, bookData.isbn, id]
            );
            callback(null, result);
        } catch (err) {
            callback(err, null);
        }
    }

};

module.exports = book;