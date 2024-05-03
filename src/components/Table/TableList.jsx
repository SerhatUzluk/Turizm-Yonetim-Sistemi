import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalTrue } from "../../redux/slices/ExpeditionSlice";
import ExpeditionDetail from "./ExpeditionDetail";

const TableList = () => {
  const { isModal } = useSelector((state) => state.expedition);
  const dispatch = useDispatch();

  const handleClickDetail = () => {
    dispatch(modalTrue());
  };

  return (
    <>
      <div className="sm:px-6 w-full relative">
        <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div className="mt-7 overflow-x-auto">
            <table className="w-full whitespace-nowrap ">
              <tbody className="rounded-3xl ">
                <tr className="focus:outline-none h-16 border border-gray-300 flex justify-between  items-center">
                  <td className="pl-5">
                    <div className="">
                      <p className="text-base font-medium leading-none text-gray-700 mr-2">
                        Logo
                      </p>
                    </div>
                  </td>

                  <td className="">
                    <div className="">
                      <p className="text-sm leading-none text-gray-600 ml-2">
                        2+1
                      </p>
                    </div>
                  </td>

                  <td className="">
                    <div className="">
                      <p className="text-sm leading-none text-gray-600 ml-2">
                        23:00
                      </p>
                    </div>
                  </td>

                  <td className="">
                    <div className="">
                      <p className="text-sm leading-none text-gray-600 ml-2">
                        04/07/2022
                      </p>
                    </div>
                  </td>

                  <td className="pr-5">
                    <div className="">
                      <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded text-white">
                        Tıkla
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* sefer detay butonu */}
        <div className=" absolute top-0">
          <button
            className=" bg-light text-black rounded p-1 hover:bg-darkBlue transition-all hover:text-white"
            onClick={handleClickDetail}
          >
            Sefer Detayları
          </button>
        </div>

        {/* sefer detay componenti */}
        {isModal && (
          <div className=" h-screen flex justify-center ">
            <ExpeditionDetail />
          </div>
        )}
      </div>
    </>
  );
};

export default TableList;
