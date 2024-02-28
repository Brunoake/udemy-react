import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Pagina de erro
import ErrorPage from './routes/ErrorPage.jsx'

import Contact from './routes/Contact'

// Componente base
import Home from './routes/Home.jsx'

// Configurando router
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage/>,
  // Componente base
  children: [
    {path: "/",
    element: <Home/>,
    },
  {
    path: "contact",
    element: <Contact/>
}
]
},
// {
//   path: "contact",
//   element: <Contact/>,
// }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
