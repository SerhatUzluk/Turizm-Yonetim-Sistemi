import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { FaUserClock } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
import { FaBus } from "react-icons/fa";
import { TbTicketOff } from "react-icons/tb";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-row">
        <div className="flex flex-col w-56 bg-darkBlue rounded-r-3xl overflow-hidden text-white m-1">
          <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-3xl uppercase text-lightBlue font-bold border-solid border-2 p-3 rounded-3xl">
              Panel
            </h1>
          </div>
          <ul className="flex flex-col py-4 ">
            <li className="border-b">
              <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200  hover:text-lightBlue">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                  <IoHomeOutline />
                </span>
                <span className="text-sm font-medium">
                  <Link to="/">Anasayfa</Link>
                </span>
              </a>
            </li>
            <li className="border-b">
              <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200  hover:text-lightBlue">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <FaUserClock />
                </span>
                <span className="text-sm font-medium">
                  <Link to="/vardiya">Vardıya</Link>
                </span>
              </a>
            </li>
            <li className="border-b">
              <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-lightBlue">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <IoIosCreate />
                </span>
                <span className="text-sm font-medium">
                  <Link to="/sefer-olustur">Sefer Oluştur</Link>
                </span>
              </a>
            </li>
            <li className="border-b">
              <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200  hover:text-lightBlue">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <RxUpdate />
                </span>
                <span className="text-sm font-medium">
                  <Link to="/sefer-guncelle">Sefer Güncelle</Link>
                </span>
              </a>
            </li>
            <li className="border-b">
              <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200  hover:text-lightBlue">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <FaBus />
                </span>
                <span className="text-sm font-medium">
                  <Link to="/Araclar">Araçlar</Link>
                </span>
              </a>
            </li>
            <li className="border-b">
              <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200  hover:text-lightBlue">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <TbTicketOff />
                </span>
                <span className="text-sm font-medium hover:cursor-pointer">Satış İptali</span>
              </a>
            </li>
            <li className="border-b">
              <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200  hover:text-lightBlue">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ü"></span>
                <span className="text-sm font-medium hover:cursor-pointer">Yedek Sayfa</span>
              </a>
            </li>
            <li className="border-b">
              <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200  hover:text-lightBlue">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <CiLogout />
                </span>
                <span className="text-sm font-medium hover:cursor-pointer">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
