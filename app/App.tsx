import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { GlobalLoader } from './components/layout/GlobalLoader';
import { APP_ROUTES } from './lib/constants';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const BookingPage = React.lazy(() => import('./pages/BookingPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const BarbersPage = React.lazy(() => import('./pages/BarbersPage'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
};

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-deep-950 text-white font-sans selection:bg-cyber selection:text-deep-950'>
      <Header />
      <main className='flex-grow pt-24'>
        {' '}
        {/* Added padding-top to avoid content being hidden behind the fixed header */}
        <Suspense fallback={<GlobalLoader />}>
          <Outlet />
        </Suspense>
      </main>
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
          <Route path={APP_ROUTES.SERVICES} element={<ServicesPage />} />
          <Route path={APP_ROUTES.BARBERS} element={<BarbersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
