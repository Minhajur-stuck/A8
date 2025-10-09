import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import App from './Components/applicationsss/App.jsx';
import Installation from './Components/Installation/Installation.jsx';
import AppDetails from './Components/AppDetails/AppDetails.jsx';
import ErrorPage from './Components/Errorpage/ErrorPage.jsx';
import AppError from './Components/AppError/AppError.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        loader:() => fetch('/appData.json'),
        path:'/',
        
        Component:Home
      },
      {
        path:'/app',
         loader:() => fetch('/fullAppData.json'),
        Component: App
      },
      {
        path:'/installation',
         loader:() => fetch('/fullAppData.json'),
        Component: Installation
      },
      { 
       
        path:'/appDetails/:id',
         loader:() => fetch('/fullAppData.json'),
        Component: AppDetails
      },
      {
         path:'/appErr',
        Component: AppError
      }

     
      

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
