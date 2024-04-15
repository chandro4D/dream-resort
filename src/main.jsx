import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import Login from './Components/Login/Login';
import ErrorElement from './ErrorElement/ErrorElement';
import Details from './Components/Details/Details';
import Register from './Components/Register/Register';
import FirebaseProvider from './Components/FirebaseProvider/FirebaseProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/resorts.json')

      },
      {
        path: "/UpdateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/resorts/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path: "/Register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
