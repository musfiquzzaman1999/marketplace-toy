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
import ToysDetails from './pages/toysCategory/ToysDetails.jsx';
import AllToys from './pages/allToys/AllToys.jsx';
import AddToy from './pages/addtoys/AddToy.jsx';
import MyToys from './pages/myToys/MyToys.jsx';






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
      {
        path: "/toys/:id",
        element:<ToysDetails></ToysDetails>,
        loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path: "/alltoys",
        element:<AllToys></AllToys>,
       
      },
      {
        path: "/addtoys",
        element:<AddToy></AddToy>,
       
      },
      {
        path: "/mytoys",
        element:<MyToys></MyToys>,
       
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
