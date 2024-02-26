export default class Book {
    constructor(title, author, releaseYear) {
        this._title = title;
        this._author = author;
        this._releaseYear = releaseYear;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        this._author = newAuthor;
    }

    get releaseYear() {
        return this._releaseYear;
    }

    set releaseYear(newYear) {
        if (typeof newYear === 'number') {
            this._releaseYear = newYear;
        } else {
            console.error('Invalid input. Year must be a number.');
        }
    }

    printInfo() {
        console.log(`Title: ${this._title}, Author: ${this._author}, Release Year: ${this._releaseYear}`);
    }

    static findOldestBook(books) {
        return books.reduce((oldest, current) => (oldest.releaseYear < current.releaseYear ? oldest : current));
    }
}