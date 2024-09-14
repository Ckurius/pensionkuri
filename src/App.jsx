// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Zimmer from './pages/Zimmer';
import Buchung from './pages/Buchung';
import About from './pages/About';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/zimmer"
              element={<Zimmer />}
            />
            <Route
              path="/buchung"
              element={<Buchung />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/kontakt"
              element={<Kontakt />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
