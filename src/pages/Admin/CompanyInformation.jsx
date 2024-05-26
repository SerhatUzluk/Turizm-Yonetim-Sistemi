import React, { useState } from "react";
import { staffList } from "../../StaffInfoExample";
import { CiSettings } from "react-icons/ci";
import { branchInfo } from "../../CompanyBranchInfo";
import { CiEdit } from "react-icons/ci";
import CompanyInfoDropdownList from "../../components/CompanyInfoDropdownList";
function CompanyInformation() {
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [isOpenCellPhoneSetting, setIsOpenCellPhoneSetting] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedMailAdress, setSelectedMailAdress] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [editingField, setEditingField] = useState({ field: 0, key: "" });

  const handleSelectNumber = (phoneNumber) => {
    if (selectedNumber === phoneNumber) {
      setSelectedNumber(null);
    } else {
      setSelectedNumber(phoneNumber);
    }
  };

  const handleSelectMailAdress = (mailAdress) => {
    if (selectedMailAdress === mailAdress) {
      setSelectedMailAdress(null);
    } else {
      setSelectedMailAdress(mailAdress);
    }
  };

  const handleSelectStaff = (id) => {
    if (selectedStaff === id) {
      setSelectedStaff(null);
    } else {
      setSelectedStaff(id);
    }
  };

  const handleEditClick = (field, key) => {
    setEditingField({ field, key });
  };

  const bolgeler = [
    { name: "İstanbul ve çevresi" },
    { name: "Bursa ve çevresi" },
    { name: "Antalya ve çevresi" },
    { name: "İzmir ve çevresi" },
    { name: "Adana ve çevresi" },
    { name: "Kocaeli ve çevresi" },
    { name: "Muğla ve çevresi" },
  ];

  const hizmetler = [
    { name: "İlçeler arası hatlar" },
    { name: "Özel Turlar" },
    { name: "VIP transfer" },
  ];

  console.log(editingField.field);
  return (
    <>
      <div className="font-gemunu">
        <div className="">
          <img
            src="https://www.gulegule.com.tr/wp-content/uploads/2023/08/Basliksiz-1-1.jpg"
            alt="firma_logo"
            className="w-full h-[250px] md:h-[350px]"
          />
        </div>
        <div className=" flex justify-center mt-8 h-[60px] items-center">
          <h6 className="font-bold text-2xl md:text-3xl text-center">Alkan Turizm Acentesi</h6>
        </div>

        <div className="text-center font-bold text-xl bg-lightBlue p-2">
          <h6>Şube Bilgileri</h6>
        </div>
        <div className="flex justify-center mt-12">
          <div className="block font-semibold text-lg w-11/12 md:w-4/6 sm:w-full lg:w-2/3">
            <div className="flex flex md:flex-row relative border">
              <label
                htmlFor="subeID"
                className="md:w-[185px] sm:text-left sm:pl-2 text-left pr-4"
              >
                Şube ID:
              </label>
              <p className="ml-4" id="subeID" name="subeID">{branchInfo[0].subeID}</p>
            </div>

            <div className="flex relative border">
              <label htmlFor="" className="md:w-[185px] sm:text-left sm:pl-2 text-left pr-4 mt-4">
                Adres:
              </label>
              <div className="block mt-2 mb-2 md:w-1/4 w-1/3">
                {Object.entries(branchInfo[0].adres).map(
                  ([address, description]) => (
                    <div key={address} className="flex ml-4 mt-1 sm:justify-left w-1/3">
                      <div
                        className="h-[30px] rounded flex items-center"
                        style={{
                          backgroundColor:
                            editingField.field === 1 ? "#fcba03" : "white",
                          cursor: editingField.field === 1 ? "pointer" : "",
                        }}
                      >
                        <p
                          className="w-[75px] text-center pr-2 h-[35px] mb-1 mt-2 "
                          onClick={() =>
                            handleEditClick(
                              editingField.field === 1 ? 1 : 0,
                              address
                            )
                          }
                        >
                          {address}:
                        </p>
                      </div>
                      <p className="mt-1 ml-2">{description}</p>
                    </div>
                  )
                )}
              </div>
              <div className="absolute right-2 top-4 cursor-pointer hover:bg-lightBlue rounded duration-300 text-xl mt-4 md:mt-1">
                <button
                  onClick={() =>
                    handleEditClick(editingField.field === 1 ? 0 : 1, "")
                  }
                  className="p-1"
                >
                  <CiEdit />
                </button>
              </div>
              <div className=" flex items-center justify-center w-1/3 md:w-[350px] sm:mb-4">
                {editingField.field === 1 && (
                  <div className="flex items-center justify-center gap-2 md:w-[300px] md:gap-0 ">
                    <label htmlFor="adres" className="w-[100px] text-right">
                      {editingField.key}:
                    </label>
                    <input type="text" className="rounded h-7 mr-2 md:w-[110px] ml-2" id="adres" name="adres"/>
                    <button className="bg-yellow rounded pr-1 pl-1 hover:bg-red hover:text-white duration-300" onClick="">
                      Değiştir
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row border">
              <label
                htmlFor="e-mail"
                className="md:w-[185px] sm:text-left sm:pl-2 text-left pr-4 "
              >
                Ana E-Posta Adresi:
              </label>
              <p className="ml-4" id="e-posta" name="e-posta">{branchInfo[0].anaEposta}</p>
            </div>
            <div className="flex flex-col md:flex-row border">
              <label
                htmlFor="telefon"
                className="md:w-[185px] sm:text-left sm:pl-2 text-left pr-4"
              >
                Ana Telefon Numarası:
              </label>
              <p className="ml-4"id="telefon" name="telefon">{branchInfo[0].anaTelefon}</p>
            </div>

            <div className="flex relative border md:block lg:flex md:pb-4">
              <label htmlFor="" className="md:w-[185px] sm:text-left sm:pl-2 text-left pr-4 mt-4">
                Çalışma Saatleri:
              </label>
              <div className="block mb-2 mt-1">
                {Object.entries(branchInfo[0].calismaSaatleri).map(
                  ([day, hours]) => (
                    <div key={day} className="flex ml-4 h-[30px] mt-1 md:w-[200px] sm:w-[200px]">
                      <p
                        className="w-[70px] text-right pr-2 rounded"
                        onClick={() =>
                          handleEditClick(editingField.field === 2 ? 2 : 0, day)
                        }
                        style={{
                          background:
                            editingField.field === 2 ? "#fcba03" : "white",
                          cursor: editingField.field === 2 ? "pointer" : "",
                        }}
                      >
                        {day}:
                      </p>
                      <p className="ml-2">{hours}</p>
                    </div>
                  )
                )}
              </div>
              <div className="absolute right-2 top-4 cursor-pointer hover:bg-lightBlue rounded duration-300 text-xl ">
                <button
                  onClick={() =>
                    handleEditClick(editingField.field === 2 ? 0 : 2, "")
                  }
                  className="p-1"
                >
                  <CiEdit />
                </button>
              </div>
              {editingField.field === 2 && (
                <div className="flex items center justify-center w-[400px] md:ml-16 sm:w-[300px] sm:block sm:mt-[120px] md:mt-4">
                  <div className="flex items-center justify-center gap-2">                  
                    <label htmlFor="calismaSaatleri" className="w-[100px] text-right">
                      {editingField.key}:
                    </label>
                    <input type="time" name="calismaSaatleri" id="calismaSaatleri" className="h-7 rounded" />
                    <input type="time" name="calismaSaatleri" id="calismaSaatleri" className="h-7 rounded" />
                    <button className="bg-yellow rounded pr-1 pl-1 hover:bg-red hover:text-white duration-300" onClick="">
                      Değiştir
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="flex relative items-center h-10 border sm:h-[70px]">
              <label
                htmlFor=""
                className="md:w-[185px] sm:text-left sm:pl-2 text-left pr-4"
              >
                Hizmet Verilen Bölge:
              </label>
              <p className="ml-4">{branchInfo[0].hizmetVerilenBolge}</p>
              <div className="absolute right-2 top-1 cursor-pointer hover:bg-lightBlue rounded duration-300 text-xl">
                <button
                  onClick={() =>
                    handleEditClick(editingField.field === 4 ? 0 : 4, "")
                  }
                  className="p-1"
                >
                  <CiEdit />
                </button>
              </div>
              {editingField.field === 4 && (
                <div className="flex items center justify-center w-[400px] z-30">
                  <div className=" flex gap-4 items-center">
                    <CompanyInfoDropdownList list={bolgeler} />
                    <button className="bg-yellow rounded pr-3 pl-3 hover:bg-red hover:text-white duration-300 h-[30px]" onClick="">
                      Ekle
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex relative h-10 items-center relative border sm:h-[100px]">
              <label
                htmlFor=""
                className="md:w-[185px] sm:text-left sm:pl-2 text-left pr-4"
              >
                Hizmet Türleri:
              </label>
              {branchInfo[0].hizmetTurleri.map((service, index) => (
                <p key={index} className="ml-4">
                  - {service}
                </p>
              ))}
              <div className="absolute right-2 top-1 cursor-pointer hover:bg-lightBlue rounded duration-300 text-xl ">
                <button
                  onClick={() =>
                    handleEditClick(editingField.field === 5 ? 0 : 5, "")
                  }
                  className="p-1"
                >
                  <CiEdit />
                </button>
              </div>
              {editingField.field === 5 && (
                <div className="flex items center justify-center w-[400px] z-30">
                  <div className=" flex gap-4 items-center">
                    <CompanyInfoDropdownList list={hizmetler} />
                    <button className="bg-yellow rounded pr-3 pl-3 hover:bg-red hover:text-white duration-300 h-[30px]" onClick="">
                      Ekle
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex relative h-10 items-center relative border sm:h-[70px]">
              <label
                htmlFor="calisanSayisi"
                className="md:w-[185px] sm:text-left sm:pl-2 text-left pr-4"
              >
                Çalışan Sayısı:
              </label>
              <p className="ml-4" id="calisanSayisi" name="calisanSayisi">{branchInfo[0].calisanSayisi}</p>
            </div>
            <div className="flex relative border sm:h-[200px]">
              <label htmlFor="" className="md:w-[185px] sm:text-left sm:pl-2 text-left pr-4 mt-10">
                Sosyal Medya Hesapları:
              </label>
              <div className="sm:block">
              <div className="block mt-10">
                {Object.entries(branchInfo[0].sosyalMedya).map(
                  ([type, value]) => (
                    <div key={type} className="flex ml-4 h-[30px] mt-1">
                      <p
                        className="w-[70px] text-right pr-2 rounded"
                        onClick={() =>
                          handleEditClick(
                            editingField.field === 6 ? 6 : 0,
                            type
                          )
                        }
                        style={{
                          background:
                            editingField.field === 6 ? "#fcba03" : "white",
                          cursor: editingField.field === 6 ? "pointer" : "",
                        }}
                      >
                        {type}:
                      </p>
                      <p className="ml-2">{value}</p>
                    </div>
                  )
                )}
              </div>
              <div className="absolute right-2 top-3 cursor-pointer hover:bg-lightBlue rounded duration-300 text-xl ">
                <button
                  onClick={() =>
                    handleEditClick(editingField.field === 6 ? 0 : 6, "")
                  }
                  className="p-1"
                >
                  <CiEdit />
                </button>
              </div>
              {editingField.field === 6 && (
                <div className="flex items center justify-center w-[400px] mt-4">
                  <div className="flex items-center justify-center gap-2">
                    <label htmlFor="sosyalMedya" className="w-[100px] text-right">
                      {editingField.key}:
                    </label>
                    <input type="text" className="rounded h-7 mr-2" id="sosyalMedya" name="sosyalMedya"/>
                    <button className="bg-yellow rounded pr-1 pl-1 hover:bg-red hover:text-white duration-300" onClick="">
                      Değiştir
                    </button>
                  </div>
                </div>
              )}
              </div>
            </div>
            <div className="flex relative h-10 items-center border sm:h-[70px] md:block md:h-[110px] lg:flex lg-h[]">
              <div className="md:flex mt-2">
              <label
                htmlFor="webSitesi"
                className="md:w-[185px] sm:text-left sm:pl-2 text-left pr-4"
              >
                Web Sitesi:
              </label>
              <p className="ml-2 md:w-1/3" id="webSitesi" name="webSitesi">{branchInfo[0].webSitesi}</p>
              </div>
              <div className="absolute right-2 top-1 cursor-pointer hover:bg-lightBlue rounded duration-300 text-xl">
                <button
                  onClick={() =>
                    handleEditClick(editingField.field === 7 ? 0 : 7, "")
                  }
                  className="p-1"
                >
                  <CiEdit />
                </button>
              </div>
              {editingField.field === 7 && (
                <div className="flex items center justify-center w-[400px] md:mt-6">
                  <div className="flex items-center justify-center gap-2">
                    <label htmlFor="webSitesi" className="w-[100px] text-right">
                      {editingField.key}
                    </label>
                    <input type="text" className="rounded h-7 mr-2" id="webSitesi" name="webSitesi"/>
                    <button className="bg-yellow rounded pr-1 pl-1 hover:bg-red hover:text-white duration-300" onClick="">
                      Değiştir
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" mt-12">
          <div className="block relative">
            <h6 className="font-bold text-lg text-center bg-lightBlue p-2">
              Mail Adresleri
            </h6>
            <button
              className="absolute right-4 top-12 font-bold text-3xl hover:bg-lightBlue duration-300 rounded"
              onClick={() => setIsOpenOptions(!isOpenOptions)}
            >
              <CiSettings />
            </button>
            <div className="flex justify-center mt-[75px] mb-[75px]">
              <div className="w-1/3 mt-4 text-center">
                {/* Firmanın mail adresleri yer alacak (geçici olarak görsel amaçlı örnek personel verilerinden çekildi.) */}
                {staffList.map((staff, index) => (
                  <p
                    key={index}
                    className="text-lg font-semibold cursor-pointer border md:w-full sm:w-full"
                    onClick={() => handleSelectMailAdress(staff.mail)}
                    style={{
                      backgroundColor:
                        selectedMailAdress === staff.mail ? "#d45d55" : "white",
                    }}
                  >
                    {staff.mail}
                  </p>
                ))}
              </div>
              {isOpenOptions && (
                <div className="flex ml-8 mt-6 relative">
                  <label htmlFor="" className="font-semibold mt-1">
                    Yeni Mail Adresi:
                  </label>
                  <input
                    type="email"
                    className="block w-[250px] h-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ml-1"
                  />
                  <button className="p-2 bg-blue h-[35px] w-[70px] rounded hover:bg-darkBlue hover:text-white duration-300 font-semibold ml-2 flex items-center justify-center">
                    Ekle
                  </button>
                  {selectedMailAdress && (
                    <div className="flex absolute top-[100px] left-[150px]">
                      <button className="p-2 bg-red h-[35px] w-[70px] rounded hover:bg-darkBlue hover:text-white duration-300 font-semibold ml-2 flex items-center justify-center">
                        Sil
                      </button>
                      <button className="p-2 bg-yellow h-[35px] w-[70px] rounded hover:bg-darkBlue hover:text-white duration-300 font-semibold ml-2 flex items-center justify-center">
                        Değiştir
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="block relative mt-8">
            <h6 className="font-bold text-lg text-center bg-lightBlue p-2">
              İletişim Numaraları
            </h6>
            <button
              className="absolute right-4 top-12 font-bold text-3xl hover:bg-lightBlue duration-300 rounded"
              onClick={() => setIsOpenCellPhoneSetting(!isOpenCellPhoneSetting)}
            >
              <CiSettings />
            </button>
            <div className="flex justify-center mt-[75px] mb-[75px]">
              <div className="w-1/5 mt-4 text-center md:w-1/4 sm:w-1/2">
                {staffList.map((staff, index) => (
                  <p
                    key={index}
                    className="text-lg border font-semibold cursor-pointer"
                    onClick={() => handleSelectNumber(staff.telefon)}
                    style={{
                      backgroundColor:
                        selectedNumber === staff.telefon ? "#d45d55" : "white",
                    }}
                  >
                    {staff.telefon}
                  </p>
                ))}
              </div>
              {isOpenCellPhoneSetting && (
                <div className="flex ml-8 mt-6 relative">
                  <label htmlFor="" className="font-semibold mt-1">
                    Yeni Telefon Numarası:
                  </label>
                  <input
                    type="email"
                    className="block w-[250px] h-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ml-1"
                  />
                  <button className="p-2 bg-blue h-[35px] w-[70px] rounded hover:bg-darkBlue hover:text-white duration-300 font-semibold ml-2 flex items-center justify-center">
                    Ekle
                  </button>
                  {selectedNumber && (
                    <div className="flex absolute top-[100px] left-[150px]">
                      <button className="p-2 bg-red h-[35px] w-[70px] rounded hover:bg-darkBlue hover:text-white duration-300 font-semibold ml-2 flex items-center justify-center">
                        Sil
                      </button>
                      <button className="p-2 bg-yellow h-[35px] w-[70px] rounded hover:bg-darkBlue hover:text-white duration-300 font-semibold ml-2 flex items-center justify-center">
                        Değiştir
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-[75px]">
            <div className="font-bold text-xl text-center bg-lightBlue p-2 w-[200px]">
              <h6 className="">Personel Listesi</h6>
            </div>
          </div>
          <div className="text-center overflow-y-auto max-h-[500px] h-full mx-4 mb-[75px] relative">
            <table className="border-collapse w-full border">
              <thead className="sticky top-0 bg-lightBlue h-[50px]">
                <tr className="text-lg">
                  <th>Personel ID</th>
                  <th>Ad</th>
                  <th>Soyad</th>
                  <th>Mail Adresi</th>
                  <th>Telefon No</th>
                  <th>Ünvan</th>
                  {selectedStaff && (
                    <div className="flex w-[100px] absolute right-4 top-0">
                      <button className="p-2 bg-red h-[35px] w-[60px] mt-2 rounded hover:bg-darkBlue hover:text-white duration-300 font-semibold ml-2 flex items-center justify-center">
                        Sil
                      </button>

                      <button className="p-2 bg-yellow h-[35px] w-[60px] mt-2 rounded hover:bg-darkBlue hover:text-white duration-300 font-semibold ml-2 flex items-center justify-center">
                        Değiştir
                      </button>
                    </div>
                  )}
                </tr>
              </thead>
              <tbody>
                {/* Firmanın Telefon numaraları yer alacak (geçici olarak görsel amaçlı örnek personel verilerinden çekildi.) */}
                {staffList.map((staff, index) => (
                  <tr
                    key={index}
                    className="border h-[45px] cursor-pointer"
                    onClick={() => handleSelectStaff(staff.id)}
                    style={{
                      backgroundColor:
                        selectedStaff === staff.id ? "#d45d55" : "white",
                    }}
                  >
                    <td>{staff.id}</td>
                    <td>{staff.ad}</td>
                    <td>{staff.soyad}</td>
                    <td>{staff.mail}</td>
                    <td>{staff.telefon}</td>
                    <td>{staff.unvan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyInformation;
