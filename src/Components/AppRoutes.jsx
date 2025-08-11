import { Routes, Route, Link } from "react-router-dom";
import Reset from "./Reset";
import Header from "./Header";
import AboutButton from "./AboutButton";
import AuthorDropdown from "./AuthorDropdown";
import BookGrid from "./BookGrid";
import BookCoverCard from "./BookCoverCard";
import BuyButton from "./BuyButton";
import Footer from "./Footer";

export default function AppRoutes() {
  return (
    <>
      <nav>
        <Link to="/">Reset</Link>
        {/* <Link to="/">Books</Link> */}
      </nav>

      <Routes>
        {/* <Route path="/" element={<Header />} />
        <Route path="/" element={<BookGrid />} />
        <Route path="/" element={<AboutButton />} />
        <Route path="/" element={<AuthorDropdown />} />
        <Route path="/" element={<BookCoverCard />} />
        <Route path="/" element={<BuyButton />} />
        <Route path="/" element={<Footer />} /> */}
      </Routes>
    </>
  );
}
