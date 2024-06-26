import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Contact from './routes/Contact';



import Home from './routes/Home';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import HookUseContext from './components/HookUseContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
      element: <Home/>,
      },
    {
      path: "/contact",
      element: <Contact/>,
  },
]
}
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HookUseContext>
    < RouterProvider router={router}/>
    </HookUseContext>
  </React.StrictMode>,
)
