import './App.css';
import React from 'react';

const books = [{
  id: 1,
  img: 'https://images-na.ssl-images-amazon.com/images/I/816ZcMz1R3L._AC_UL200_SR200,200_.jpg',
  title: 'The Women of the Bible',
  author: 'Shannon Bream',
},
{
  id: 2,
  img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
},
{
  id: 3,
  img: 'https://images-na.ssl-images-amazon.com/images/I/81xlx1cQhPL._AC_UL200_SR200,200_.jpg',
  title: 'On the House: A Washington',
  author: 'John Boehner',
},
];


const Book = (props) => {
  const { author, title, img } = props;

  return <article className='book'>
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>;
};

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
