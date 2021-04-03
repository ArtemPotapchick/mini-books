import './App.css';
import React from 'react';
import Book from './components/Book';
import { books } from './data/books';

function App() {
  // attribute, eventHandler =====  events
  return (
    <section className='booklist'>
      {books.map(book => {
        return <Book key={book.id} {...book}/>;
      })}
    </section>
  );
}

export default App;
