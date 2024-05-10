import React, { useEffect, useState } from "react";

function AccountInfo() {
  function checkCheckbox(checkbox) {
    if (checkbox.checked) {
      // Seçilen checkbox'ın ID'sini al
      var id = checkbox.id;
      // Diğer checkbox'ın durumunu kontrol et ve seçiliyse seçimini kaldır
      if (id === "gender-male") {
        document.getElementById("gender-female").checked = false;
      } else if (id === "gender-female") {
        document.getElementById("gender-male").checked = false;
      }
    }
  }

  return (
    <div className="mt-12 font-gemunu">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-bold leading-7 text-gray-900 ml-4 text-xl">
          Hesap Bilgileri
        </h3>
      </div>
      <form action="">
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-semibold leading-6 text-gray-900 p-4">
                İsim:
              </dt>
              <input
                type="text"
                className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 rounded"
                value="Ahmet"
                placeholder="isim..."
              />
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-semibold leading-6 text-gray-900 p-4">
                Soyisim:
              </dt>
              <input
                type="text"
                className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 rounded"
                value="Candan"
                placeholder="soyisim..."
              />
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-semibold leading-6 text-gray-900 p-4">
                E-Mail Adres:
              </dt>
              <input
                type="text"
                className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 rounded"
                disabled
                value="ahmetbey@gmail.com"
                placeholder="E-mail adres..."
              />
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-semibold leading-6 text-gray-900 p-4">
                Telefon Numarası:
              </dt>
              <input
                type="number"
                className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 rounded"
                value="555 777 8899"
                placeholder="Telefon Numarası..."
              />
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-semibold leading-6 text-gray-900 p-4">
                TC Kimlik No:
              </dt>
              <input
                type="number"
                className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 rounded"
                placeholder="TC kimlik no..."
              />
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-semibold leading-6 text-gray-900 p-4">
                Cinsiyet:
              </dt>
              <div className="flex text-lg">
                <div>
                  <label htmlFor="">Erkek</label>
                  <input
                    type="checkbox"
                    className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 rounded ml-2"
                    name="cinsiyet"
                    id="gender-male"
                    onChange={() =>
                      checkCheckbox(document.getElementById("gender-male"))
                    }
                  />
                </div>
                <div className="pl-4">
                  <label htmlFor="" className="">
                    Kadın
                  </label>
                  <input
                    type="checkbox"
                    className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 rounded ml-2"
                    name="cinsiyet"
                    id="gender-female"
                    onChange={() =>
                      checkCheckbox(document.getElementById("gender-female"))
                    }
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-darkBlue p-3 text-white rounded mt-8 mb-12 text-lg hover:bg-blue duration-300 transition font-bold"
              >
                Bilgilerimi Kaydet
              </button>
            </div>
          </dl>
        </div>
      </form>
      <hr />
      <div>
        <dl className="divide-y divide-gray-100">
          <div className="px-4 sm:px-0 mt-4">
            <h3 className="text-base font-bold leading-7 text-gray-900 ml-4 text-xl p-4">
              Şifremi Yenile
            </h3>
          </div>
          <form action="">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-semibold leading-6 text-gray-900 p-4">
                Şifrenizi Girin:
              </dt>
              <input
                type="password"
                className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 rounded"
                placeholder="şifre..."
              />
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-semibold leading-6 text-gray-900 p-4">
                Şifrenizi Doğrulayın:
              </dt>
              <input
                type="password"
                className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 rounded"
                placeholder="şifre..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-darkBlue p-3 text-white rounded mt-8 mb-12 text-lg hover:bg-blue duration-300 transition font-bold"
              >
                Şifreyi Kaydet
              </button>
            </div>
          </form>
        </dl>
      </div>
    </div>
  );
}

export default AccountInfo;
