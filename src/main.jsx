import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SectionProductDetail from './components/Section/SectionProductDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   { index: true, element: <HomePage /> },
    //   /* existing routes */
  // ]
  },
  {
    path: "/ProductDetail",
    element: <SectionProductDetail />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
