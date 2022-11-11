import React from 'react';
import Book from '../components/Book';
import AddBook from '../components/addBook';

const Bookss = () => (
  <div>
    <Book title="The Hunger Games" author="Suzanne Collins" />
    <Book title="Dune" author="Frank Herbert" />
    <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
    <AddBook />
  </div>
);

export default Bookss;
