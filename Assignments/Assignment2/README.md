# Vallejo Public Library Website Plan (Assignment 2)

## 1) Website Map (Site Structure)

- Home (index.html)
  - Catalog Preview (shown on Home)
  - Latest News (shown on Home)
  - Contact / General Inquiries (shown on Home)
- Book Detail Page (book.html)
  - Book info (title, author, summary, etc.)
  - Copies (total + available)
  - Reserve form (start reservation process)
- Get a Library Card (card.html)
  - Library card request form

Notes:
- This repo includes the 3 required HTML pages: index.html, book.html, card.html.
- The catalog is represented with sample entries (preview list) for simplicity.

## 2) Book Reservation Process (Decision Table Diagram)

| Step | Actor | Action / Decision | Outcome |
|------|-------|-------------------|---------|
| 1 | User | Opens a book detail page (book.html) | Book information is displayed |
| 2 | System | Checks the number of available copies | Availability status is determined |
| 3 | System | Are available copies greater than 0? | Decision point |
| 4a | User | If **Yes**, clicks the **Reserve** button | Reservation request is submitted |
| 5a | System | Marks one copy as **Reserved** | Book status becomes *Reserved* |
| 6a | User | Goes to the library in person | User picks up the reserved book |
| 4b | System | If **No**, shows **"Not available"** message | Reservation cannot be started |
