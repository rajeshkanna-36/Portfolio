import { useState, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import HelloLoader from './components/HelloLoader';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import WeatherApp from './pages/demos/WeatherApp';
import CalculatorApp from './pages/demos/CalculatorApp';

const ROUTE_ORDER: Record<string, number> = {
  '/': 0,
  '/projects': 1,
  '/skills': 2,
  '/about': 3,
  '/demos/weather': 4,
  '/demos/calculator': 5,
};

const variants = {
  initial: (dir: number) => ({ opacity: 0, x: dir * 40 }),
  animate: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
};

const transition = { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const };

function AnimatedRoutes({ homeVisible }: { homeVisible: boolean }) {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  const prevIndex = ROUTE_ORDER[prevPathRef.current] ?? 0;
  const nextIndex = ROUTE_ORDER[location.pathname] ?? 0;
  const direction = nextIndex >= prevIndex ? 1 : -1;
  prevPathRef.current = location.pathname;

  return (
    // Outer div clips horizontal slide animation; motion.div has NO overflow
    // so that position:sticky inside child pages (e.g. Projects cards) still works.
    <div style={{ overflowX: 'clip' }}>
      <AnimatePresence mode="sync" custom={direction}>
        <motion.div
          key={location.pathname}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          style={{ willChange: 'transform, opacity' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home isVisible={homeVisible} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/demos/weather" element={<WeatherApp />} />
            <Route path="/demos/calculator" element={<CalculatorApp />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [loaderDone, setLoaderDone] = useState(false);

  const handleLoaderComplete = () => {
    setLoading(false);
    setTimeout(() => setLoaderDone(true), 700);
  };

  return (
    <>
      {!loaderDone && <HelloLoader onComplete={handleLoaderComplete} />}
      <div className="min-h-screen">
        <Navbar />
        <AnimatedRoutes homeVisible={!loading} />
      </div>
    </>
  );
}

export default App;
