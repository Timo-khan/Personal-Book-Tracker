import React, { useContext, useState } from "react";
import BookContext from "../contexts/BookContext";
import BookCard from "./BookCard";
import "./bookList.css";

const BookList = () => {
  const { books } = useContext(BookContext);
  const [filter, setFilter] = useState("All");

  const filteredBooks = books.filter((book) => {
    if (filter === "All") return true;
    return book.status === filter;
  });

  return (
    <div className="book-list-container">
      <div className="filter-buttons">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Want to Read")}>Want to Read</button>
        <button onClick={() => setFilter("Reading")}>Reading</button>
        <button onClick={() => setFilter("Finished")}>Finished</button>
      </div>
      <div className="books-grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
