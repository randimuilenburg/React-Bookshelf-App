import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "./AboutPage";
import Header from "./Header";
import DropdownAuthors from "./DropdownAuthors";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <DropdownAuthors />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}
