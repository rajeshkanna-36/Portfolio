import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HelloLoader from './components/HelloLoader';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import WeatherApp from './pages/demos/WeatherApp';
import CalculatorApp from './pages/demos/CalculatorApp';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <HelloLoader onComplete={() => setLoading(false)} />
      {!loading && (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-opacity duration-700 ease-in opacity-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/demos/weather" element={<WeatherApp />} />
            <Route path="/demos/calculator" element={<CalculatorApp />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
