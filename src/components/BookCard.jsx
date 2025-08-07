import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BookContext from "../contexts/BookContext";
import "./bookCard.css";

const BookCard = ({ book }) => {
  const { deleteBook } = useContext(BookContext);
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <p>Status: {book.status}</p>
      {book.rating && <p>Rating: {book.rating}/5</p>}
      <div className="card-actions">
        <Link to={`/edit/${book.id}`} className="edit-btn">
          Edit
        </Link>
        <button onClick={() => deleteBook(book.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
