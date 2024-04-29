import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import ExpeditionPage from "./pages/ExpeditionPage.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

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
    path: "/iletisim",
    element: <ContactPage />,
    errorElement: <></>,
  },
  {
    path: "/sefer",
    element: <ExpeditionPage />,
    errorElement: <></>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  </Provider>
  // </React.StrictMode>,
);
