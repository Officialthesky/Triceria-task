import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home";
import Ordersplaced from "./Pages/Ordersplaced";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ordersplaced" element={<Ordersplaced />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
