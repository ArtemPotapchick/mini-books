import React from 'react';
const Book = (props) => {
  const { author, title, img } = props;

  // eslint-disable-next-line no-shadow
  const clickHandler = (author) => {
    alert(author);
  };

  return <article className='book' onMouseOver={() => {
    console.log(title);
  }}>
    <img src={img} alt=""/>
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={() => clickHandler(author)}/>
  </article>;
};

export default Book;
