import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/nav';
import Bookstore from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Bookstore />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
