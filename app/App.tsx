import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { APP_ROUTES } from './lib/constants';
import ErrorBoundary from './components/layout/ErrorBoundary';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const BookingPage = React.lazy(() => import('./pages/BookingPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const BarbersPage = React.lazy(() => import('./pages/BarbersPage'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ErrorBoundary>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={APP_ROUTES.BOOKING} element={<BookingPage />} />
            <Route path={APP_ROUTES.SERVICES} element={<ServicesPage />} />
            <Route path={APP_ROUTES.BARBERS} element={<BarbersPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
