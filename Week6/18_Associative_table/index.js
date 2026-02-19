// Create bookArray with example rows
const bookArray = [
  { id_book: 1, name: "Everything You Ever Wanted to Know", author: "Upton", isbn: "082305649x" },
  { id_book: 2, name: "Photography", author: "Vilppu", isbn: "205711499" },
  { id_book: 3, name: "Drawing Manual Vilppu", author: "Zelanshi", isbn: "1892053039" }
];


console.log("Data type of bookArray:", typeof bookArray);


console.log("Entire bookArray:", bookArray);


console.log("First row of bookArray:", bookArray[0]);


console.log("Name of the first book:", bookArray[0].name);


console.log("Number of rows (books) in bookArray:", bookArray.length);


console.log("Names of all books:");
bookArray.forEach(book => {
  console.log(book.name);
});
