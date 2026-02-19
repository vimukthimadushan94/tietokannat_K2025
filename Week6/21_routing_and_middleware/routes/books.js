const express = require('express');
const router = express.Router();

const bookArray = [
            { id_book: 1, name: "Everything You Ever Wanted to Know", author: "Upton", isbn: "082305649x" },
            { id_book: 2, name: "Photography", author: "Vilppu", isbn: "205711499" },
            { id_book: 3, name: "Drawing Manual Vilppu", author: "Zelanshi", isbn: "1892053039" }
        ];

router.get('/books',
    function(request, response){
        response.json(bookArray);
    }
);

router.post('/books',
    function(request, response){
        console.log(request.body);
        bookArray.push({
            id_book: request.body.id_book,
            name: request.body.name,
            author: request.body.author,
            isbn: request.body.isbn
        });
        response.json(bookArray);
    }
);

module.exports = router;