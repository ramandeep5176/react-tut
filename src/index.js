import React from "react";
import ReactDom from "react-dom";
//books
import { books } from "./books";
// book
import Book from "./Book";
// css
import "./index.css";
// setup vars

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

//
ReactDom.render(<BookList />, document.getElementById("root"));
