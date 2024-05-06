import React from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const PaymentPage = () => {
  return (
    <div className="flex flex-row justify-around p-2">
      <div className="border-solid border-2 w-96 h-96 rounded-md p-2 pt-1">
        <div className="flex justify-between">
          <p className="p-2 ml-3">SEFER BİLĞİLERİ</p>
          <p className="p-2 mr-3">Logo + isim</p>
        </div>

        <hr />
        <table className="flex flex-col items-start ml-5">
          <tr>
            <th>Kalkış</th>
          </tr>
          <tr>
            <td>Gaziantep otogarı</td>
          </tr>
          <tr>
            <th>Varış</th>
          </tr>
          <tr>
            <td>istabul Otogarı</td>
          </tr>
          <tr>
            <th>Hareket Zamanı</th>
          </tr>
          <tr>
            <td>6 Mayıs Pazartesi 00:06</td>
          </tr>
          <tr>
            <th>Koltuk</th>
          </tr>
          <tr>
            <td>19</td>
          </tr>
          <tr>
            <th>Peron</th>
          </tr>
          <tr>
            <td>25</td>
          </tr>
          <tr>
            <th>Bilet İşlemleri</th>
          </tr>
          <tr>
            <td>
              Biletiniz açığa alınamaz, değiştirilemez veya iptal edilemez.
            </td>
          </tr>
        </table>
      </div>
      <div className="border-solid border-2 w-64 h-96 rounded-md p-2 pt-2">
        <p className="p-2 ml-3">KİŞİSEL BİLĞİLER</p>
        <hr />
        <label
          htmlFor="name"
          className="block text-lg font-bold leading-6 text-gray-900 ml-3 mt-2"
        >
          Ad Soyad
        </label>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="name"
            autoComplete="name"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <label
          htmlFor="email"
          className="block text-lg font-bold leading-6 text-gray-900 ml-3  mt-1"
        >
          E-Mail Adres
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <label
          htmlFor="mobil"
          className="block text-lg font-bold leading-6 text-gray-900 ml-3  mt-1"
        >
          cep telefonu
        </label>
        <div className="mt-2">
          <input
            id="mobil"
            name="mobil"
            type="mobil"
            autoComplete="mobil"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <label
          htmlFor="tc"
          className="block text-lg font-bold leading-6 text-gray-900 ml-3  mt-1"
        >
          Tc
        </label>
        <div className="mt-2">
          <input
            id="tc"
            name="tc"
            type="tc"
            autoComplete="tc"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="border-solid border-2 w-96 h-96 rounded-md p-2 pt-2">
        <div className="flex justify-around p-2">
          <FaCcVisa className="text-4xl" />
          <SiAmericanexpress className="text-4xl" />
          <FaCcMastercard className="text-4xl" />
        </div>
        <hr />
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-bold leading-6 text-gray-900 ml-6 mt-2"
          >
            Kart Numarası
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              required
              className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 m-auto"
            />
          </div>

          <div className="flex">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-bold leading-6 text-gray-900 ml-6 mt-2"
              >
                Son Kullanma Tarihi
              </label>
              <input
                className="block w-36 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 m-auto"
                placeholder="AA/YY"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-bold leading-6 text-gray-900 ml-6 mt-2"
              >
                CV
              </label>
              <input className="block w-36 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 m-auto" />
            </div>
          </div>

          <div className="p-3">
            <p className="text-xs">
              <input type="checkbox" />
              Ön Bilgilendirme Formu'nu , Mesafeli Satış Sözleşmesi'ni okudum ve
              onaylıyorum. Kişisel verilerin işlenmesine ilişkin Aydınlatma
              Metni’ni ve Çerez Politikası Metni'ni okudum. Kullanım
              Koşulları’nı kabul ediyorum.
            </p>
          </div>
          <div className="flex justify-center pt-3">
            <button className="bg-green-300 w-72 h-10 rounded-md">
              Güvenli Ödeme Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
