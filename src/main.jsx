import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Navigation from './components/Navigation.jsx';
import Login from './PAGES/Login/login.jsx';
import SignUp from './PAGES/SignUp/SignUp.jsx';
import SignInPage from './PAGES/auth/Sign-in/SignInPage.jsx';
import SignUpPage from './PAGES/auth/Sign-Up/SignUpPage.jsx';
import BiddedCarsPage from './components/BiddedCarsPage.jsx';
import PaymentGateway from './PAGES/PaymentGateway/PaymentGateway.jsx';

import Product from './PAGES/Cards/Product.jsx';
import StartBidding from './PAGES/Bidding/StartBidding.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { CarProvider } from './Contex/CarContext';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/brows",
    element: <Product />,
  },
  {
    path: "/startbid",
    element: <StartBidding />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/sigup",
    element: <SignUpPage />,
  },
  {
    path: "/myaccount",
    element: <SignUp />,
  },
  {
    path: "/mybid",
    element: <BiddedCarsPage />,
  },
  {
    path: "/payment",
    element: <PaymentGateway />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <CarProvider>
        <RouterProvider router={router} />
      </CarProvider>
    </ClerkProvider>
  </StrictMode>
);
