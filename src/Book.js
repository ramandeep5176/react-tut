//

import React from "react";

export const Book = ({ img, title, author }) => {
  // attribute,eventhandler
  const clickHandler = () => {
    alert("hello");
  };
  // click2 btn
  const click2 = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        click
      </button>
      <button type="button" onClick={() => click2(author)}>
        click2
      </button>
    </article>
  );
};

export default Book;
