import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Navigation from './components/Navigation.jsx'
import Login from './PAGES/Login/login.jsx'
import SignUp from './PAGES/SignUp/SignUp.jsx'
import ViewMore from './PAGES/viewMore/viewMore.jsx'
import Product from './PAGES/Cards/Product.jsx'
import StartBidding from './PAGES/Bidding/StartBidding.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router =createBrowserRouter([

{
  path:"/",
  element:<App/>,
},
{
  path:"/cart",
  element:<ViewMore/>
},
{
  path:"/brows",
  element:<Product/>
},
{
  path:"/startbid",
  element:<StartBidding/>
}





]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

