const borrower = require('../models/borrowModel');

// Get all borrowers
exports.getAllBorrowers = function(request, response) {
    borrower.getAll(function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
};

// Get one borrower
exports.getOneBorrower = function(request, response) {
    borrower.getOne(request.params.id, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
};

// Add borrower
exports.addBorrower = function(request, response) {
    borrower.add(request.body, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
};

// Delete borrower
exports.deleteBorrower = function(request, response) {
    borrower.delete(request.params.id, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
};

// Update borrower
exports.updateBorrower = function(request, response) {
    borrower.update(request.params.id, request.body, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
};