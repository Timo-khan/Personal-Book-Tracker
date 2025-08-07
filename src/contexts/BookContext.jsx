import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BookContext = createContext();
const API_URL = "http://localhost:5000/books";

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get(API_URL);
    setBooks(response.data);
  };

  const addBook = async (book) => {
    const response = await axios.post(API_URL, book);
    setBooks([...books, response.data]);
  };

  const updateBook = async (id, updatedBook) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedBook);
    setBooks(books.map((book) => (book.id === id ? response.data : book)));
  };

  const deleteBook = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{ books, addBook, updateBook, deleteBook, fetchBooks }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
