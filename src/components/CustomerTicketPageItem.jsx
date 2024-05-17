import React from "react";

const CustomerTicketPageItem = () => {
  return (
    <div className=" p-4 rounded-xl shadow mt-8 w-96 shadow-sky-400 relative">
      <div className=" flex gap-y-5 flex-col border-b py-2">
        <div className=" flex gap-x-5 justify-start items-center">
          <p>Firma Bilgisi: </p>
          <span className=" font-bold">Kamilkoç</span>
        </div>

        <div className=" flex gap-x-5 justify-start items-center">
          <p>Otobüs Tipi: </p>
          <span className=" font-bold">2+1</span>
        </div>

        <div className=" flex gap-x-5 justify-start items-center">
          <p>Güzergah: </p>
          <span className=" font-bold">İstanbul-Antalya</span>
        </div>
      </div>

      <div>
        <div className="absolute -top-5 -right-5 border p-2 rounded-full bg-green-600 text-white">
          <span>Yer Var</span>
        </div>

        <div className="absolute -top-5 -right-5 border p-2 rounded-full bg-red-600 text-white hidden">
          <span>Yer Yok</span>
        </div>
      </div>

      <div className=" mt-4 flex justify-center items-center ">
        <button className="  bg-darkBlue hover:bg-lightBlue text-white p-1 rounded transition-all">
          Hemen Satın Al
        </button>
      </div>
    </div>
  );
};

export default CustomerTicketPageItem;
