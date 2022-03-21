import { Routes, Route, BrowserRouter } from "react-router-dom";
import ThreeJs from "./components/ThreeJs";
import AllPokemon from "./views/AllPokemon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="three" element={<ThreeJs />} />
          <Route path="*" element={<AllPokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
