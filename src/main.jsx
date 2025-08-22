import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Programing from './pages/programing.jsx';
import Article from './pages/article.jsx';
import Contact from './pages/contact.jsx';
import Coaches from './pages/Coaches.jsx';
import RootLayout from './components/RootLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,  
    errorElement: <div>404 - Page Not Found</div>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "programing", element: <Programing /> },
      { path: "article", element: <Article /> },
      { path: "coaches", element: <Coaches /> },
      { path: "contact", element: <Contact /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
