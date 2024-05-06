import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import icon from "../images/smr-logo.png";

const navigation = [
  { name: "Anasayfa", href: "/", current: true },
  { name: "Hakkımızda", href: "/hakkimizda", current: false },
  { name: "iletişim", href: "/iletisim", current: false },
];

const transactions = [
  { name: "Kayıt Ol", href: "#" },
  { name: "Giriş Yap", href: "#" },
  { name: "Seferleri Görüntüle", href: "/sefer" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-darkBlue font-gemunu">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-[80px]">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start mt-4">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-16 w-auto rounded" src={icon} alt="Your Company" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 mt-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-lightBlue text-darkBlue"
                            : "text-gray-300 hover:bg-blue hover:text-darkBlue",
                          "rounded-md px-3 py-2 text-lg font-medium transition duration-300 hover:scale-105 hover:-translate-x-2 "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden sm:hidden mt-2 ml-10 ">
                  <div className="mt-3">
                    <Menu
                      as="div"
                      className="relative inline-block text-left w-[70px] ml-[10px] sm:ml-[20px] sm:w-[80px] mt-2"
                    >
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-2 text-lg font-semibold text-darkBlue shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-5">
                          <RiMenu2Fill />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-semibold">
                          <div className="py-1">
                            {navigation.map((item, index) => (
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active
                                        ? "bg-lightBlue text-darkBlue"
                                        : "bg-darkBlue text-white",
                                      "block px-4 py-2 text-lg"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>

                <div className=" sm:mr-[5px] mt-3 ml-8 sm:ml-0 lg:ml-8">
                  <input
                    type="text"
                    placeholder="Ara..."
                    className="px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 sm:w-[110px] md:w-[240px] lg:w-[440px]"
                  />
                </div>
=======
>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")
=======
>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")
              </div>
              {/*İşlemler Dropdown Menü*/}
              <div className="mt-3">
                <Menu as="div" className="relative inline-block text-left w-[120px]">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      İşlemler
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-semibold">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/giris"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-lg"
                              )}
                            >
                              Giriş Yap
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/kayit"                              
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-lg"
                              )}
                            >
                              Kayıt Ol
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/sefer"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-lg"
                              )}
                            >
                              Sefer İşlemleri
                            </a>
                          )}
<<<<<<< HEAD
<<<<<<< HEAD
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/bilet-sorgu"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-lg"
                              )}
                            >
                              Bilet Sorgula
                            </a>
                          )}
                        </Menu.Item>
=======
                        </Menu.Item>                       
>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")
=======
                        </Menu.Item>                       
>>>>>>> 58cc5b4 (Revert "Navbar' a search bölümü eklendi, BusTemplate2 'de renk düzenlemeleri yapıldı ve cinsiyet seçme butonu eklendi. CampaignsPage bileşeni oluşturuldu.")
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}


export default Navbar;
