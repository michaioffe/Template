const { MongoClient } = require('mongodb');
const {
  insertBook,
  insertAuthor,
  findBooksByAuthor,
  searchBooks,
  findBooksOver250Pages
} = require('./dbOperations');

// Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'library';

// Connect to the MongoDB server
async function connectToDB() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log('Connected to the database');
    return client;
  } catch (err) {
    console.log('Error connecting to the database:', err);
  }
}

// Call the connectToDB function to establish the connection
connectToDB().then((client) => {
  // Insert a book document
  const book = {
    name: 'The Great Gatsby',
    description: 'A novel set in the Jazz Age',
    publicationDate: new Date(1925, 3, 10),
    author: 'F. Scott Fitzgerald',
    pages: 218
  };
  insertBook(client, dbName, book);

  // Insert an author document
  const author = {
    name: 'F. Scott',
    lastName: 'Fitzgerald',
    dateOfBirth: new Date(1896, 8, 24)
  };
  insertAuthor(client, dbName, author);


  // Additional examples
  const book2 = {
    name: 'To Kill a Mockingbird',
    description: 'A Pulitzer Prize-winning novel',
    publicationDate: new Date(1960, 6, 11),
    author: 'Harper Lee',
    pages: 281
  };
 insertBook(client, dbName, book2);

  const author2 = {
    name: 'Harper',
    lastName: 'Lee',
    dateOfBirth: new Date(1926, 3, 28)
  };
insertAuthor(client, dbName, author2);

const book3 = {
    name: '1984',
    description: 'A dystopian novel by George Orwell',
    publicationDate: new Date(1949, 6, 8),
    author: 'George Orwell',
    pages: 328
};
insertBook(client, dbName, book3);

const author3 = {
  name: 'Harper',
  lastName: 'Lee',
  dateOfBirth: new Date(1926, 3, 28)
};
insertAuthor(client, dbName, author3);

const book4 = {
  name: 'To Kill a Mockingbird',
  description: 'A Pulitzer Prize-winning novel by Harper Lee',
  publicationDate: new Date(1960, 6, 11),
  author: 'Harper Lee',
  pages: 281
};
insertBook(client, dbName, book4);

const author4 = {
  name: 'Harper',
  lastName: 'Lee',
  dateOfBirth: new Date(1926, 3, 28)
};
insertAuthor(client, dbName, author4);

const book5 = {
  name: '1984',
    description: 'A dystopian novel by George Orwell',
    publicationDate: new Date(1949, 6, 8),
    author: 'George Orwell',
    pages: 328
};
insertBook(client, dbName, book5);

const author5 = {
  name: 'George',
    lastName: 'Orwell',
    dateOfBirth: new Date(1903, 5, 25)
};
insertAuthor(client, dbName, author5);

const book6 = {
    name: 'Pride and Prejudice',
    description: 'A classic novel by Jane Austen',
    publicationDate: new Date(1813, 0, 28),
    author: 'Jane Austen',
    pages: 432
};
insertBook(client, dbName, book6);

const author6 = {
    name: 'Jane',
    lastName: 'Austen',
    dateOfBirth: new Date(1775, 11, 16)
};
insertAuthor(client, dbName, author6);


  // Retrieve books by a specific author
  findBooksByAuthor(client, dbName, 'F. Scott Fitzgerald');

  // Search books by name or description
  searchBooks(client, dbName, 'Gatsby');

  // Retrieve books over 250 pages (sorted by page count)
  findBooksOver250Pages(client, dbName);

});

