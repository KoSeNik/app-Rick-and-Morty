import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Categories from "./pages/Categories";
import Character from "./pages/Character";
import Location from "./pages/Location";
import Episode from "./pages/Episode";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route path="/characters/:name" element={<Character />} />
        <Route path="/locations/:name" element={<Location />} />
        <Route path="/episodes/:name" element={<Episode />} />
      </Routes>
    </div>
  );
}

export default App;
