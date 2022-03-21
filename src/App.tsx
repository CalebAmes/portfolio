import { Routes, Route, BrowserRouter } from "react-router-dom";
import ThreeJs from "./components/ThreeJs";
import Dice from "./components/ThreeJs/dice";
import AllPokemon from "./views/AllPokemon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="three" element={<ThreeJs />} />
          <Route path="dice" element={<Dice />} />
          <Route path="*" element={<AllPokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
