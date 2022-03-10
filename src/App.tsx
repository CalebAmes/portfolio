import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllPokemon from "./views/AllPokemon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AllPokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
