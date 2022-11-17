import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/addBook';

const Books = () => {
  const books = useSelector((state) => state.book);
  return (
    <div className="main-container">
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          completed={book.completed}
          chapter={book.chapter}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
