
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage.jsx'
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from './pages/ContactPage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ResetPassword from './pages/ResetPassword.jsx'

{
  /*Route oluşturmak için router oluşturuldu.*/
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <></>,
  },
  {
    path: "/kayit",
    element: <RegistrationPage />,
    errorElement: <></>,
  },
  {
    path: "/hakkimizda",
    element: <AboutPage />,
    errorElement: <></>,
  },
  {
    path: '/iletisim',
    element: <ContactPage/>,
    errorElement:<></>
  },
  {
    path: '/giris',
    element: <LoginPage/>,
    errorElement:<></>
  },
  {
    path: '/sifre-yenile',
    element: <ResetPassword/>,
    errorElement:<></>
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MainLayout>
    <RouterProvider router={router} />
  </MainLayout>
  // </React.StrictMode>,
);
