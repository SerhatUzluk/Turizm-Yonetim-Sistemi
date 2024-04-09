import React from "react";

<<<<<<< HEAD
const Navbar = () => {
  return (
    <div>Navbar</div>
  )
=======
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import icon from "../images/smr-logo.png";

const navigation = [
  { name: "Anasayfa", href: "/", current: true },
  { name: "Hakkımızda", href: "#", current: false },
  { name: "iletişim", href: "#", current: false },
];

const transactions = [
  { name: "Kayıt Ol", href: "#" },
  { name: "Giriş Yap", href: "#" },
  { name: "Seferleri Görüntüle", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
>>>>>>> 93222d3840d0fbbaae5472969bf07f2c6c669ea2
}

function Navbar() {
  return (

}

export default Navbar;
