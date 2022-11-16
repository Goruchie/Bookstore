import React from 'react';
import '../modules-css/addbook.css';

const AddBook = () => (
  <form className="form">
    <h3>ADD NEW BOOK</h3>
    <div className="inputs">
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Book Author" />
      <input type="button" value="ADD BOOK" />
    </div>
  </form>
);

export default AddBook;
