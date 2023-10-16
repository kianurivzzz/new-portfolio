import "./css/main.css";

// libs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// utils
import ScrollToTop from "./utils/scrollToTop";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
