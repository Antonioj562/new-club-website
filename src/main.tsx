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

const repoPath = '/new-club-website'; // Only needed when deployed to GitHub Pages match vite.config.ts base

const router = createBrowserRouter([
  {
    element: <Rootlayout />,
    children: [
      { path: `${repoPath}/`, element: <Home /> },
      { path: `${repoPath}/e-board`, element: <EBoard /> },
      { path: `${repoPath}/events`, element: <Events /> },
      { path: `${repoPath}/projects`, element: <Projects /> },
      { path: `${repoPath}/contact`, element: <Contact /> },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
