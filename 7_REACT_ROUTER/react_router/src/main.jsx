import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Pagina de erro
import ErrorPage from './routes/ErrorPage.jsx';

import Contact from './routes/Contact';

// Componente base
import Home from './routes/Home.jsx';

// Rota dinamica
import Product from './routes/Product.jsx';

// nested route
import Info from './routes/Info.jsx';

// Search
import Search from './routes/Search.jsx';

// Navigate
import { Navigate } from 'react-router-dom';


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
    {
      path: "/",
    element: <Home/>,
    },
  {
    path: "contact",
    element: <Contact/>,
},
// Rota dinamica
{
  path: "products/:id",
  element: <Product/>,
},
// Nested route
{
 path: "products/:id/info",
 element: <Info/>,
},
// Search params 
{
path: "search",
element: <Search/>,
},
// Redirect
{
  path: "teste",
  element: <Navigate to="/"/>
}
],
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
