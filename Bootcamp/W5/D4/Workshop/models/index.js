const Author = require("./author.model");
const Book = require("./book.model");
const Borrower = require("./borrower.model");
const Quote = require("./quote.model");

/*********** One-to-One ***********/
// Who is dependent on whom? =>  The target depends on the source

// The target belongs to the source and the source has a target

// A book belongs to a borrower, and a borrower has a book
Book.belongsTo(Borrower);
Borrower.hasOne(Book);

/*********** One-to-Many ***********/
// By default, the source has many targets and the target belongs to the source
Author.hasMany(Book);
Book.belongsTo(Author);

/*********** Many-to-Many ***********/
// Both sides are at the same time sources and targets
// A book is a source because many targets (quotes), but quote is also source as it is in many targets (books)
// we require an extra table, called a junction table or join table in order to connect the two
// this table's name is passed as second param in below function call
Book.belongsToMany(Quote, { through: "Book_Quote" });
Quote.belongsToMany(Book, { through: "Book_Quote" });

module.exports = { Author, Book, Borrower, Quote };
