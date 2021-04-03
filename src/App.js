import './App.css';
import React from 'react';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/816ZcMz1R3L._AC_UL200_SR200,200_.jpg',
  title: 'The Women of the Bible\n'
    + '      Speak: The Wisdom of 16 Women and Their Lessons for Today',
  author: 'Shannon Bream',
};
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
};

const Book = (props) => {
  const { author, title, img } = props;


  return <article className='book'>
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>;
};

function App() {
  return (
    <section className='booklist'>
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
    </section>
  );
}

export default App;
