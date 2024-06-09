import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from './App.jsx'
import './css/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
