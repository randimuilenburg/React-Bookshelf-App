import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import DropdownAuthors from "./Components/DropdownAuthors";
import AppRoutes from "./Components/AppRoutes";

function App() {
  return (
    <div>
      <AppRoutes />
      {/* <Navigation /> */}
      <Header />
      <DropdownAuthors />
    </div>
  );
}

export default App;
