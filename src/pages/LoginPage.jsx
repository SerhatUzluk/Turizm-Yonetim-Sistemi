import React, { useState } from 'react'
import logo from '../images/smr-logo-dark.png'
import { Link } from 'react-router-dom'
import DOMPurify from 'dompurify'
export default function LoginPage() {

  const [loginData, setLoginData] = useState({
    eMail: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...loginData,
      [name]: value,
    });
  };
{/* post işleminde kullanılacak veri */}
  const sanitizedData = {
    eMail: DOMPurify.sanitize(loginData.eMail),
    password: DOMPurify.sanitize(loginData.password)
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
              Hesabınıza giriş yapın
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-lg font-bold leading-6 text-gray-900">
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
                    value={FormData.eMail}
                    onChange={handleChange}
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-lg font-bold leading-6 text-gray-900">
                    Şifre
                  </label>
                  <div className="text-sm">
                    <Link to="/sifre-yenile" className="font-semibold text-blue hover:text-darkBlue text-md">
                      Şifreni mi unuttun?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={FormData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-darkBlue px-3 py-1.5 text-lg font-bold leading-6 text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Giriş Yap
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-lg text-blue">
              Üye değil misiniz?{' '}
              <Link to='/kayit' className="font-semibold leading-6 transition duration-500 ease-in-out bg-gradient-to-r hover:bg-gradient-to-r hover:from-darkBlue hover:to-blue hover:text-white rounded">
                Kayıt olmak için tıklayın.
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  