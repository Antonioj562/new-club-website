import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Rootlayout from "./layouts/Rootlayout.tsx"
import { Contact } from "./pages/Contact.tsx"
import { EBoard } from "./pages/E_Board.tsx"
import { Events } from "./pages/Events.tsx"
import { Projects } from "./pages/Projects.tsx"
import { Home } from "./pages/Home.tsx"

const repoBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, ''); // '' or '/new-club-website'
const routePrefix = repoBase === '' ? '' : repoBase; // use empty string for root

const router = createBrowserRouter([
  {
    element: <Rootlayout />,
    children: [
      { path: `${routePrefix}/`, element: <Home /> },
      { path: `${routePrefix}/e-board`, element: <EBoard /> },
      { path: `${routePrefix}/events`, element: <Events /> },
      { path: `${routePrefix}/projects`, element: <Projects /> },
      { path: `${routePrefix}/contact`, element: <Contact /> },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
