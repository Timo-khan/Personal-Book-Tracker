import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookContext from "../contexts/BookContext";
import "./bookForm.css";

const BookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, addBook, updateBook } = useContext(BookContext);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    status: "Want to Read",
    rating: "",
    review: "",
  });

  useEffect(() => {
    if (id) {
      const bookToEdit = books.find((book) => book.id === id);
      if (bookToEdit) {
        setFormData(bookToEdit);
      }
    }
  }, [id, books]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateBook(id, formData);
    } else {
      addBook({ ...formData, id: Date.now().toString() });
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <h2>{id ? "Edit Book" : "Add New Book"}</h2>
      {/* ... form inputs for title, author, status, etc. */}
      <button type="submit">{id ? "Update Book" : "Add Book"}</button>
    </form>
  );
};

export default BookForm;
