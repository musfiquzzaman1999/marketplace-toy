import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main.jsx';



import Home from './pages/home/home/Home.jsx';
import Login from './pages/login/login.jsx';
import AuthProvider from './pages/provider/AuthProvider.jsx';
import Ragister from './pages/login/Ragister.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/ragister",
        element: <Ragister />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
