// components
import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy load components
const Browser = lazy(() => import('../Browse'));
const Login = lazy(() => import('../Login'));

const Body: React.FC = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browser',
      element: <Browser />,
    },
    {
      path: '*',
      element: <div>404 - Page Not Found</div>, // Fallback for unmatched routes
    },
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default Body;
