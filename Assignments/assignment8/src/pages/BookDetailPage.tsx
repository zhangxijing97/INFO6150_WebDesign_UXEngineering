import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBookById } from "../api/booksApi";
import type { Book } from "../types/Book";

export default function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBook() {
      try {
        if (!id) {
          setError("Book ID is missing.");
          return;
        }

        const data = await getBookById(id);
        setBook(data);
      } catch (err) {
        setError("Failed to load book details.");
      } finally {
        setLoading(false);
      }
    }

    loadBook();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    <main>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
      <p><strong>Published Year:</strong> {book.publishedYear}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </main>
  );
}