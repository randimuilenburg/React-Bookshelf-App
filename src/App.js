import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import DropdownAuthors from "./Components/DropdownAuthors";

function App() {
  return (
    <div>
      {/* <h1>Author Book Project</h1> */}
      <Navigation />
      <Header />
      <DropdownAuthors />
    </div>
  );
}

export default App;
