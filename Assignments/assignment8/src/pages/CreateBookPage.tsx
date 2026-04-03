import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createBook } from "../api/booksApi";
import type { Book } from "../types/Book";

interface FormErrors {
  title?: string;
  author?: string;
  genre?: string;
  pages?: string;
  publishedYear?: string;
  publisher?: string;
}

export default function CreateBookPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Book>({
    title: "",
    author: "",
    genre: "",
    pages: 0,
    publishedYear: 0,
    publisher: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): FormErrors {
    const newErrors: FormErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.author.trim()) newErrors.author = "Author is required.";
    if (!formData.genre.trim()) newErrors.genre = "Genre is required.";
    if (!formData.publisher.trim()) newErrors.publisher = "Publisher is required.";
    if (formData.pages <= 0) newErrors.pages = "Pages must be greater than 0.";
    if (formData.publishedYear < 1800 || formData.publishedYear > new Date().getFullYear()) {
      newErrors.publishedYear = "Enter a valid published year.";
    }

    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "pages" || name === "publishedYear"
          ? Number(value)
          : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    await createBook(formData);
    navigate("/");
  }

  return (
    <main>
      <h1>Create New Book</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input id="title" name="title" type="text" value={formData.title} onChange={handleChange} />
          {errors.title && <p>{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="author">Author:</label>
          <input id="author" name="author" type="text" value={formData.author} onChange={handleChange} />
          {errors.author && <p>{errors.author}</p>}
        </div>

        <div>
          <label htmlFor="genre">Genre:</label>
          <input id="genre" name="genre" type="text" value={formData.genre} onChange={handleChange} />
          {errors.genre && <p>{errors.genre}</p>}
        </div>

        <div>
          <label htmlFor="pages">Pages:</label>
          <input id="pages" name="pages" type="number" value={formData.pages} onChange={handleChange} />
          {errors.pages && <p>{errors.pages}</p>}
        </div>

        <div>
          <label htmlFor="publishedYear">Published Year:</label>
          <input
            id="publishedYear"
            name="publishedYear"
            type="number"
            value={formData.publishedYear}
            onChange={handleChange}
          />
          {errors.publishedYear && <p>{errors.publishedYear}</p>}
        </div>

        <div>
          <label htmlFor="publisher">Publisher:</label>
          <input
            id="publisher"
            name="publisher"
            type="text"
            value={formData.publisher}
            onChange={handleChange}
          />
          {errors.publisher && <p>{errors.publisher}</p>}
        </div>

        <button type="submit">Create Book</button>
      </form>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </main>
  );
}