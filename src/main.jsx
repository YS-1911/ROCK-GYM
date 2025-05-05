import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Programing from './pages/programing.jsx';
import Article from './pages/article.jsx';
import Contact from './pages/contact.jsx';
import Coaches from './pages/Coaches.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404</div>,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <div>404</div>,
  },
  {
    path: "/programing",
    element: <Programing />,
    errorElement: <div>404</div>,
  },
  {
    path: "/article",
    element: <Article />,
    errorElement: <div>404</div>,
  },
  {
    path: "/coaches",
    element: <Coaches />,
    errorElement: <div>404</div>,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <div>404</div>,
  },


]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)

