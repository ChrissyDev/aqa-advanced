import Book from './book.js';
import EBook from './eBook.js';

const book1 = new Book('Title1', 'Author1', 2000);
const book2 = new Book('Title2', 'Author2', 2010);

const ebook1 = new EBook('E-Title1', 'E-Author1', 2020, 'PDF');
const ebook2 = new EBook('E-Title2', 'E-Author2', 2021, 'EPUB');

book1.printInfo();
book2.printInfo();
ebook1.printInfo();
ebook2.printInfo();

const oldestBook = Book.findOldestBook([book1, book2, ebook1, ebook2]);
console.log('Oldest book:');
oldestBook.printInfo();

const newEBook = EBook.createEBookFromBook(book2, 'MOBI');
console.log('New EBook:');
newEBook.printInfo();