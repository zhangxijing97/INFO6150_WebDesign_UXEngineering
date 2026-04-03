import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteBook, getBooks } from "../api/booksApi";
import type { Book } from "../types/Book";

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadBooks() {
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (err) {
      setError("Failed to load books.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  async function handleDelete(id: string) {
    const confirmed = window.confirm("Are you sure you want to delete this?");
    if (!confirmed) return;

    try {
      await deleteBook(id);
      loadBooks();
    } catch (err) {
      setError("Failed to delete book.");
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Book List</h1>

      <p>
        <Link to="/create">Create New Book</Link>
      </p>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              {book.title}
            </Link>{" "}
            - {book.author}{" "}
            <Link to={`/edit/${book.id}`}>Edit</Link>{" "}
            <button onClick={() => handleDelete(book.id!)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}