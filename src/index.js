import React from "react";
import ReactDom from "react-dom";

// css
import "./index.css";
// setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51xPyfcG1IL._SX329_BO1,204,203,200_.jpg",
  title: "You Are a Badass at Making Money: Master the Mindset of Wealth",
  author: "Jen Sincero",
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41ApNA6CwTL._SX331_BO1,204,203,200_.jpg",
  title: `can't hurt me`,
  author: `david goggins`,
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article>
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

//
ReactDom.render(<BookList />, document.getElementById("root"));
