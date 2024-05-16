import Home from "./components/Home/Home";
import About from "./components/About/About";
import CarModels from "./components/CarModels/CarModels";
import Testimonials from "./components/Testimonials/Testimonials";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Vehicle-Models" element={<CarModels />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Our-Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
