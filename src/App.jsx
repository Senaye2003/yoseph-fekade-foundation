import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import useScrollReveal from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Project from "./pages/Project";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";

export default function App() {
  useScrollReveal();
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/project" element={<Project />} />
          <Route path="/impact" element={<Navigate to="/programs" replace />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
