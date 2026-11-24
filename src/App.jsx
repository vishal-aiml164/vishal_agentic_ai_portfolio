
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ProjectDetail from "./pages/ProjectDetail";

// Homepage component
function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

// Main application
function App() {
  return (
    <Routes>

      {/* Homepage */}
      <Route path="/" element={<HomePage />} />

      {/* Individual project pages */}
      <Route
        path="/projects/:projectId"
        element={<ProjectDetail />}
      />

      {/* Redirect unknown URLs to homepage */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;
