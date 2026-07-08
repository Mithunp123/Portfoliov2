import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tools from './pages/Tools';
import Blog from './pages/Blog';
import Honors from './pages/Honors';
import Experience from './pages/Experience';

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is loaded (only available in production/if added in index.html)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <PageTracker />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="tools" element={<Tools />} />
            <Route path="blog" element={<Blog />} />
            <Route path="experience" element={<Experience />} />
            <Route path="honors" element={<Honors />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
