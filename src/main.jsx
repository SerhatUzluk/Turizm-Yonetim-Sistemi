import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

{/*Route oluşturmak için router oluşturuldu.*/}
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <></>
  },
  {
    path: '/kayit',
    element: <RegistrationPage/>,
    errorElement: <></>
  },
  {
    path: '/iletisim',
    element: <ContactPage/>,
    errorElement:<></>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
