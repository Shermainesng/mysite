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
      <Navbar />
      <Home />
      <Resume />
      <MyWorks />
      <Contact />
    </div>
  );
}
// function Main() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/my-works" element={<MyWorks />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

ReactDOM.render(<App />, document.querySelector("#app"));
