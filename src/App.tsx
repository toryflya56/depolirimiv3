import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';
import { APP_ROUTES } from './lib/constants';

// ==========================================
// 1. UTILITY: SCROLL RESTORATION
// ==========================================
/**
 * Automatically scrolls to top of page on route change.
 * Essential for SPA (Single Page Application) UX.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant jump is better for full page loads
    });
  }, [pathname]);

  return null;
};

// ==========================================
// 2. LAYOUT WRAPPER
// ==========================================
/**
 * Wraps all pages with the persistent Header and Footer.
 * <Outlet /> is where the Page content will be injected.
 */
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-deep-950 text-white font-sans selection:bg-cyber selection:text-deep-950">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

// ==========================================
// 3. APP ROUTER CONFIGURATION
// ==========================================

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={APP_ROUTES.BOOKING} element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
