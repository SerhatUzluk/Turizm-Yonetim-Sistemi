import React from "react";
import LoginPage from "./LoginPage";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const TicketPage = () => {
  return (
    <div className=" flex w-2/3 mx-auto justify-center items-center gap-10 p-4">
      {/* login */}
      <div className=" border flex-[1] shadow-xl rounded flex justify-center items-center flex-col p-4">
            <LoginPage />
            <div className=" my-4 flex gap-5 font-gemunu font-bold text-black">
                <button className=" flex justify-around items-center gap-3 border transition-all p-3 rounded w-60 bg-lightBlue hover:bg-blue"><span className="p-2 rounded bg-black text-white"><FaGoogle size={25}/></span> Google ile giriş yap</button>
                <button className=" flex justify-around items-center gap-3 border p-3 rounded w-60 bg-facebook hover:bg-blue transition-all"><span className="p-2 rounded bg-black text-white"><FaFacebook size={25}/></span> Facebook ile giriş yap</button>
            </div>
      </div>

      

      {/* bilet sorgu */}
      <div className=" border flex-[1] shadow-xl rounded p-4 h-full flex flex-col justify-center  gap-10">
            <div className=" border-b">
                <p className=" font-gemunu font-bold">PNR Numaranız ile Biletinizi Sorgulayın</p>
            </div>

            <div>
                <form className=" w-1/2 mx-auto flex flex-col gap-5">
                    <div>
                        <label htmlFor="email" className="block text-lg font-gemunu font-bold leading-6 text-gray-900">
                        Firma Adı Giriniz
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
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-bold font-gemunu leading-6 text-gray-900">
                        PNR Numaranız
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
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-gemunu font-bold leading-6 text-gray-900">
                        Cep Telefonu veya Email
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
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-darkBlue px-3 py-1.5 text-lg font-bold leading-6 text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            Bileti Sorgula
                        </button>
                    </div>
                </form>
            </div>

            <div className=" w-full ">
                <p className=" font-gemunu text-sm flex flex-col justify-center items-center ">PNR numaranızı bulmak için onay e-mail veya Cep telefonunuzu kontrol ediniz. <span className=" text-red-500 cursor-pointer font-semibold">PNR kodunuzu bulamıyor musunuz?</span></p>
            </div>
      </div>
    </div>
  );
};

export default TicketPage;
