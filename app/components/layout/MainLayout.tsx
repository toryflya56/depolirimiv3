import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { GlobalLoader } from './GlobalLoader';

export const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-deep-950 text-white font-sans selection:bg-cyber selection:text-deep-950'>
      <Header />
      <main className='flex-grow pt-24'>
        {/* Added padding-top to avoid content being hidden behind the fixed header */}
        <Suspense fallback={<GlobalLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
