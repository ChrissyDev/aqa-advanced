import Book from './book.js';

export default class EBook extends Book {
    constructor(title, author, releaseYear, fileFormat) {
        super(title, author, releaseYear);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(newFormat) {
        this._fileFormat = newFormat;
    }

    printInfo() {
        super.printInfo();
        console.log(`File Format: ${this._fileFormat}`);
    }

    static createEBookFromBook(bookInstance, fileFormat) {
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.releaseYear, fileFormat);
    }
}