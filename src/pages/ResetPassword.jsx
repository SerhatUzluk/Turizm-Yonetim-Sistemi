import React from "react";
import logo from "../images/smr-logo-dark.png";
import { Link } from "react-router-dom";
export default function ResetPassword() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-gemunu">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              className="mx-auto h-20 w-auto rounded hover:scale-125 transition duration-300"
              src={logo}
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Şifre Yenile
          </h2>
        </div>

        <div className="flex justify-center sm:mx-auto sm:w-full sm:max-w-sm mt-6 text-gray-500">
            <p>Şifrenizi yenilemek için mail adresinizi giriniz, şifre yenileme bağlantısını en kısa sürede göndereceğiz.</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>                
              <label
                htmlFor="email"
                className="block text-lg font-bold leading-6 text-gray-900"
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
                  placeholder="E-Mail adresinizi giriniz..."
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>        

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-darkBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Şifre Yenileme Bağlantısını Gönder
              </button>
            </div>
          </form>          
        </div>
      </div>
    </>
  );
}
