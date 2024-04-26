import React from "react";
import { useState } from "react";
import logo from "../images/smr-logo-dark.png";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar.jsx";
import { PasswordStrengthMeter } from "../components/PasswordStrengthMeter.jsx";

export default function RegistrationPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setPasswordError("Şifreler uyuşmuyor!");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-light font-gemunu">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              className="mx-auto h-20 w-auto rounded hover:scale-125 transition duration-300"
              src={logo}
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Yeni hesap oluşturun
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-lg leading-6 text-gray-900 font-bold"
              >
                Ad
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Adınız..."
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-lg leading-6 text-gray-900 font-bold"
              >
                Soyad
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="lastName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Soyadınız..."
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg leading-6 text-gray-900 font-bold"
              >
                E-Mail Adresi
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="E-Mail Adress..."
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-lg leading-6 text-gray-900 font-bold"
              >
                Telefon Numarası
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="phoneNumber"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Telefon Numaranız..."
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg leading-6 text-gray-900 font-bold"
                >
                  Şifre
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Şifre..."
                  onBlur={handlePasswordChange}
                />
                <PasswordStrengthMeter password={password} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg leading-6 text-gray-900 font-bold"
                >
                  Şifrenizi Doğrulayın
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Şifreyi doğrula..."
                  onBlur={handleConfirmPasswordChange}
                />
                <div id="passwordError" className="font-semibold text-red-500 bordered text-right">
                  {passwordError}
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-darkBlue px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Kayıt Ol
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-lg text-blue">
            Zaten üye misiniz?{" "}
            <a
              href="#"
              className="font-semibold leading-6 transition duration-500 ease-in-out bg-gradient-to-r hover:bg-gradient-to-r hover:from-darkBlue hover:to-blue hover:text-white rounded"
            >
              Giriş Yapmak için tıklayın.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
