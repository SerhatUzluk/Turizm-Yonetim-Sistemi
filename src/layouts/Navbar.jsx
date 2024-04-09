import React from "react";

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
}

function Navbar() {
  return (

}

export default Navbar;
