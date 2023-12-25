
import { Home } from "./view/Home";
import { Contacto } from "./view/Contacto";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  );
}

export default App;