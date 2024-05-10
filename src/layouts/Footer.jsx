import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
  FaGooglePlusG,
  FaCcVisa,
  FaCcMastercard,
  FaTelegram,
} from "react-icons/fa";
import Maps from "../components/Maps";

const Footer = () => {
  return (

    <div className="flex flex-col w-full">
      <div className="flex-grow pt-4">
      <footer className="bg-darkBlue text-light  text-center font-gemunu border-t-2 border-light h-70">
        <div className="container mx-auto py-4">
          <div className="flex justify-between px-16">
            <div className="text-2xl grid grid-cols-3 gap-8 pl-20 mt-5">
              <FaInstagram className="hover:scale-125 text-instagram" />
              <FaTwitter className="hover:scale-125 text-twitter" />
              <FaYoutube className="hover:scale-125 text-youtube" />
              <FaFacebook className="hover:scale-125 text-facebook" />
              <FaWhatsapp className="hover:scale-125 text-whatshap" />
              <FaGooglePlusG className="hover:scale-125 text-google" />
              <FaTelegram className="hover:scale-125 text-telegram" />
              <FaCcMastercard className="hover:scale-125 text-Mastercard" />
              <FaCcVisa className="hover:scale-125 text-visa" />
            </div>

            <div className="text-center mb-6 pl-20 font-gemunu">
              <p className="text-xl pt-5 font-gemunu">
                Street: Yakacık City: Kartal State/Province/Area: Istanbul{" "}
                <br />
                Phone number: 216 3770093 <br />
                Country calling code: +90 <br />
                Country: Turkey
                <br />
                <p className="text-xl pt-10 ">
                  &copy; 2024. Tüm hakları saklıdır.
                </p>
              </p>
            </div>

            <div className="mt-5">
              <Maps />
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>

  );
};

export default Footer;
