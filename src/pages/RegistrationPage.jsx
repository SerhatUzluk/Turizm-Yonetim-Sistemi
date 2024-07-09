import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import logo from "../images/smr-logo-dark.png";
import Navbar from "../layouts/Navbar.jsx";
import { PasswordStrengthMeter } from "../components/PasswordStrengthMeter.jsx";
import { useAddMusteriMutation } from "../features/api/apiSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../redux/slices/PasswordSlice.js";

export default function RegistrationPage() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    password: "",    
    phoneNumber: "",
    cinsiyet: "",
    kimlikNo: "",    
  });
  const dispatch = useDispatch();
  const strength = useSelector((state) => state.password.strength);
  const password = useSelector((state) => state.password.passwordValue);
  const [addMusteri, { isLoading, isSuccess, isError, error }] =
    useAddMusteriMutation();

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    dispatch(setPassword(value));
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: value,
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phoneNumber") {
      const numericValue = value.replace(/\D/g, "");
      setFormData({
        ...formData,
        phoneNumber: numericValue,
      });
    } else if (name === "kimlikNo") {
      const numericValue = value.replace(/\D/g, "");
      setFormData({
        ...formData,
        kimlikNo: numericValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      cinsiyet: name === "erkek" ? "erkek" : "kadin",
    }));
  };

  const sanitizedData = {
    ad: DOMPurify.sanitize(formData.ad),
    soyad: DOMPurify.sanitize(formData.soyad),
    email: DOMPurify.sanitize(formData.email),
    phoneNumber: DOMPurify.sanitize(formData.phoneNumber),
    password: DOMPurify.sanitize(formData.password),
    cinsiyet: DOMPurify.sanitize(formData.cinsiyet),
    kimlikNo: DOMPurify.sanitize(formData.kimlikNo),    
  };

  const handleSubmit = async (e) => {    
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Şifreler uyuşmuyor!");
      return false;
    } else {
      setPasswordError("");
      if (
        strength > 50 &&
        formData.kimlikNo.length >= 11 &&
        formData.phoneNumber.length >= 11
      ) {
        try {
          await addMusteri(sanitizedData).unwrap();
          alert("Kayıt işlemi başarılı!");
          setFormData({
            ad: "",
            soyad: "",
            email: "",
            password: "",            
            phoneNumber: "",
            cinsiyet: "",
            kimlikNo: "",
          });
          dispatch(setPassword(""));
          setConfirmPassword("");
        } catch (err) {
          console.error("Failed to add musteri: ", err);
        }
      }
    }

    return true;
  };

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
                htmlFor="ad"
                className="block text-lg leading-6 text-gray-900 font-bold"
              >
                Ad
              </label>
              <div className="mt-2">
                <input
                  id="ad"
                  name="ad"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Adınız..."
                  value={formData.ad}
                  onChange={handleChange}
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
                  name="soyad"
                  type="text"
                  autoComplete="lastName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Soyadınız..."
                  value={formData.soyad}
                  onChange={handleChange}
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
                  placeholder="E-Mail Adresi..."
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="relative">
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
                  pattern="[0-9]*"
                  autoComplete="tel"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Telefon Numarası..."
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  maxLength={11}
                />
              </div>
              <div
                className={
                  formData.phoneNumber.length <= 10 &&
                  formData.phoneNumber != ""
                    ? "bg-yellow w-[250px] rounded font-semibold right-1 mt-2 absolute duration-300"
                    : "absolute bg-yellow w-[250px] rounded font-semibold right-1 mt-2 opacity-0 duration-300"
                }
              >
                <p>Telefon numaranız 11 basamaktan oluşmalı!</p>
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="kimlikNumarasi"
                className="block text-lg leading-6 text-gray-900 font-bold"
              >
                T.C. Kimlik No
              </label>
              <div className="mt-2">
                <input
                  id="kimlikNo"
                  name="kimlikNo"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="T.C. Kimlik No..."
                  value={formData.kimlikNo}
                  onChange={handleChange}
                  maxLength={11}
                />
              </div>
              <div
                className={
                  formData.kimlikNo.length <= 10 && formData.kimlikNo != ""
                    ? "bg-yellow w-[270px] rounded font-semibold right-1 mt-2 absolute duration-300"
                    : "absolute bg-yellow w-[270px] rounded font-semibold right-1 mt-2 opacity-0 duration-300"
                }
              ><p>T.C. Kimlik Numaranız 11 basamaktan oluşmalı!</p></div>
            </div>

            <div>
              <label
                htmlFor="cinsiyet"
                className="block text-lg leading-6 text-gray-900 font-bold"
              >
                Cinsiyet
              </label>
              <div className="flex text-lg font-semibold text-gray-400">
                <div className="flex mt-4 ">
                  <label>Erkek</label>
                  <input
                    type="checkbox"
                    name="erkek"
                    className="ml-2 mt-[5px] rounded p-2"
                    checked={formData.cinsiyet === "erkek"}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="flex mt-4 ml-4">
                  <label>Kadın</label>
                  <input
                    type="checkbox"
                    name="kadin"
                    className="ml-2 mt-[5px] rounded p-2"
                    checked={formData.cinsiyet === "kadin"}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </div>
            </div>

            <div className="relative">
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
                  onChange={handlePasswordChange}
                  value={password}
                />
                <PasswordStrengthMeter />
              </div>
              <div
                className={
                  strength <= 50 && password != ""
                    ? "bg-yellow w-[210px] rounded font-semibold right-1 mt-2 absolute duration-300"
                    : "absolute bg-yellow w-[210px] rounded font-semibold right-1 mt-2 opacity-0 duration-300"
                }
              >
                <p>Lütfen daha güçlü bir şifre oluşturun!</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
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
                  onChange={handleConfirmPasswordChange}
                  value={confirmPassword}
                />
                <div
                  id="passwordError"
                  className="font-semibold text-red-500 bordered text-right"
                >
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
            <Link
              to="/giris"
              className="font-semibold leading-6 transition duration-500 ease-in-out bg-gradient-to-r hover:bg-gradient-to-r hover:from-darkBlue hover:to-blue hover:text-white rounded"
            >
              Giriş Yapmak için tıklayın.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
