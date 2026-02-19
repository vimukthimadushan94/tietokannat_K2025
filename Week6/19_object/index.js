const book = {

    bookArray: [
            { id_book: 1, name: "Everything You Ever Wanted to Know", author: "Upton", isbn: "082305649x" },
            { id_book: 2, name: "Photography", author: "Vilppu", isbn: "205711499" },
            { id_book: 3, name: "Drawing Manual Vilppu", author: "Zelanshi", isbn: "1892053039" }
        ],


    getAllBooks: function () {
        console.log(this.bookArray); 
    },


    getOneBook: function (x) {
        const foundBook = this.bookArray.find(book => book.id_book === x);
        
        if (foundBook) {
            console.log(foundBook);
        } else {
            console.log("Book not found");
        }
    },


    addBook: function (id_book, name, author, isbn) {
        this.bookArray.push({
            id_book: id_book,
            name: name,
            author: author,
            isbn: isbn
        });
        console.log("Book added");
    }
};



console.log("All books:");
book.getAllBooks();

console.log("\nGet one book (id 2):");
book.getOneBook(2);

console.log("\nAdding a new book:");
book.addBook(4, "Test book 1", "Haninen", "9780261103344");

console.log("\nAll books after adding:");
book.getAllBooks();
