import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import EpisodeDetails from "./components/EpisodeDetails";
import Episodes from "./pages/Episodes";
import Navbar from "./components/navbar/NavBar";
import Locations from "./pages/Locations";
import LocationDetails from "./components/LocationDetails";
import {useEffect} from "react";
import {ThemeProvider} from "./components/themes/ThemeContext";

function App() {
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-bs-theme", savedTheme);
    }, []);

    return (
        <ThemeProvider>
      <Router>
          <div className="App">
              <Navbar />
          </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CardDetails />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/episodes/:id" element={<EpisodeDetails />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:id" element={<LocationDetails />} />

        </Routes>
      </Router>
        </ThemeProvider>
  );
}

export default App;
