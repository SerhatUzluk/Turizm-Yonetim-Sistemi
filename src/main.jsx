import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/images/custom.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import ExpeditionPage from "./pages/ExpeditionPage.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import LoginPage from "./pages/LoginPage.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import TicketPage from "./pages/TicketPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import TicketShowPage from "./pages/TicketShowPage.jsx";
import TicketPoint from "./pages/TicketPoint.jsx";
import ShiftPage from "./pages/Planning/ShiftPage.jsx";
import CreateExpedition from "./components/Expedition/CreateExpedition.jsx";
import UpdateExpedition from "./components/Expedition/UpdateExpedition copy.jsx";
import CompanyPage from "./pages/CompanyPage.jsx";
import VehiclesPages from "./pages/VehiclesPages.jsx";
import SaleCancellation from "./pages/SalesDepartment/SaleCancellation.jsx";
import AddPersonel from "./pages/Admin/Personel/AddPersonel.jsx";
import PersonelTable from "./pages/Admin/Personel/PersonelTable.jsx";
import Updateersonel from "./pages/Admin/Personel/UpdatePersonel.jsx";
import Statistics from "./pages/Admin/Statistics.jsx";
import CompanyInformation from "./pages/Admin/CompanyInformation.jsx";
import Brands from "./pages/Brands.jsx";
import { PersistGate } from "redux-persist/lib/integration/react.js";
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
  {
    path: "/giris",
    element: <LoginPage />,
    errorElement: <></>,
  },
  {
    path: "/sifre-yenile",
    element: <ResetPassword />,
    errorElement: <></>,
  },
  {
    path: "/bilet-sorgu",
    element: <TicketPage />,
    errorElement: <></>,
  },
  {
    path: "/odeme-sistemi",
    element: <PaymentPage />,
    errorElement: <></>,
  },
  {
    path: "/biletlerim",
    element: <TicketShowPage />,
    errorElement: <></>,
  },
  {
    path: "/bilet-puan",
    element: <TicketPoint />,
    errorElement: <></>,
  },
  {
    path: "/vardiya",
    element: <ShiftPage />,
    errorElement: <></>,
  },
  {
    path: "/sefer-olustur",
    element: <CreateExpedition />,
    errorElement: <></>,
  },
  {
    path: "/sefer-guncelle",
    element: <UpdateExpedition />,
    errorElement: <></>,
  },
  {
    path: "/firma",
    element: <CompanyPage />,
    errorElement: <></>,
  },
  {
    path: "/Araclar",
    element: <VehiclesPages />,
    errorElement: <></>,
  },
  {
    path: "/satis-iptal",
    element: <SaleCancellation />,
    errorElement: <></>,
  },
  {
    path: "/personel-ekle",
    element: <AddPersonel />,
    errorElement: <></>,
  },
  {
    path: "/personel-düzenle",
    element: <Updateersonel />,
    errorElement: <></>,
  },
  {
    path: "/personels",
    element: <PersonelTable />,
    errorElement: <></>,
  },
  {
    path: "/istatistikler",
    element: <Statistics />,
    errorElement: <></>,
  },
  {
    path: "/firma-bilgisi",
    element: <CompanyInformation />,
    errorElement: <></>,
  },
  {
    path: "/markalar",
    element: <Brands />,
    errorElement: <></>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </PersistGate>
  </Provider>   
  // </React.StrictMode>,
);
