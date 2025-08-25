import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "./AboutPage";

export default function AppRoutes() {
  return (
    <>
      <nav>
        {/* <Link to="/">Reset</Link> */}
        {/* <Link to="/">Books</Link> */}
      </nav>

      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}
