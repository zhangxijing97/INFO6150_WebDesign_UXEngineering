import type { Book } from "../types/Book";

const BASE_URL = "https://69d0429090cd06523d5d2806.mockapi.io/books";

export async function getBooks(): Promise<Book[]> {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
}

export async function getBookById(id: string): Promise<Book> {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch book");
  }

  return response.json();
}

export async function createBook(book: Book): Promise<Book> {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });

  if (!response.ok) {
    throw new Error("Failed to create book");
  }

  return response.json();
}

export async function updateBook(id: string, book: Book): Promise<Book> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });

  if (!response.ok) {
    throw new Error("Failed to update book");
  }

  return response.json();
}

export async function deleteBook(id: string): Promise<void> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete book");
  }
}