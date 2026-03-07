const book = require('../models/bookModel');


exports.getAllBooks = function(request, response) {
    book.getAll(function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            console.log(dbResult);
            response.json(dbResult);
        }
    });
};


exports.getOneBook = function(request, response) {
    book.getOne(request.params.id, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
};


exports.addBook = function(request, response) {
    book.add(request.body, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
};


exports.deleteBook = function(request, response) {
    book.delete(request.params.id, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
};


exports.updateBook = function(request, response) {
    book.update(request.params.id, request.body, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
};