import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';
import { APP_ROUTES } from './lib/constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

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
