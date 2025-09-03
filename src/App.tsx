import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookDetailsPage from "./pages/BookDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<BookDetailsPage />} path="/book/:id" />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
