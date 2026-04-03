import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookDetailPage from "./pages/BookDetailPage";
import CreateBookPage from "./pages/CreateBookPage";
import EditBookPage from "./pages/EditBookPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/create" element={<CreateBookPage />} />
        <Route path="/edit/:id" element={<EditBookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;