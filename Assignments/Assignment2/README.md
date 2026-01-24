# Vallejo Public Library Website Plan (Assignment 2)

## 1) Website Map (Site Structure)

- Home (index.html)
  - Book Detail (book.html)
  - Get a Library Card (card.html)
  - (Optional future sections for a full site)
    - News (shown on homepage)
    - Contact (shown on homepage footer)

Notes:
- This repo includes 3 HTML pages required by the assignment.
- Some sections (News/Contact) are presented on the homepage for simplicity.

## 2) Book Reservation Process (Flowchart)

flowchart TD
  A([Start]) --> B[User opens a book detail page (book.html)]
  B --> C[System checks available copies]
  C --> D{Available copies > 0?}

  D -- Yes --> E[User clicks "Reserve"]
  E --> F[System creates reservation\nStatus = Reserved]
  F --> G[User goes to the library to pick up the reserved book]
  G --> H([End])

  D -- No --> I[Show message: "Not available"]
  I --> H

## 3) Sources / Tools

- Content is fictional and created for class assignment demo purposes.
- AI tool used: ChatGPT (planning + HTML structure).
