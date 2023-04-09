import React from 'react';
import './assets/styles/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookStore from './pages/BookStore';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<BookStore />} />
        <Route path='/add-book' element={<AddBook />} />
        <Route path='/edit-book/:bookId' element={<EditBook />} />
      </Routes>
    </Router>
  );
}

export default App;
