import { Routes, Route, BrowserRouter } from "react-router-dom";
import MessageShrewdness from "./components/MessageShrewdness";
import AllPokemon from "./views/AllPokemon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AllPokemon />} />
          <Route path="messageShrewdness" element={<MessageShrewdness />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
