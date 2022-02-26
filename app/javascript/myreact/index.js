import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./components/Home";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import MyWorks from "./components/MyWorks";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Home />
      <Resume />
      <MyWorks />
      <Contact />
    </div>
  );
}
function Main() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="#home" element={<App />} />
        <Route path="#myworks" element={<App />} />
        <Route path="#contact" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));
