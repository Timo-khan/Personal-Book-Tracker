import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BookProvider } from "./contexts/BookContext";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Navbar from "./components/Navbar";
import "./app.css";

function App() {
  return (
    <Router>
      <BookProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<BookForm />} />
            <Route path="/edit/:id" element={<BookForm />} />
          </Routes>
        </main>
      </BookProvider>
    </Router>
  );
}

export default App;
