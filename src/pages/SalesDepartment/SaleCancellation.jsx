import React, { useEffect, useState } from "react";
import { sales } from "../../SaleDataExample";
import { FaSearch } from "react-icons/fa";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

function SaleCancellation() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [searchedId, setSearchedId] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const handleClick = (id) => {
    setSelectedRow(id);
    setIsClicked(true);
  };
  
  const pageSize = 30;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(sales.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, sales.length);
  const currentData = filteredData.slice(startIndex, endIndex);

  const goToPage = (pageNumber) => {
    if (pageNumber <= totalPages && pageNumber >= 1) setCurrentPage(pageNumber);
  };

  useEffect(() => {
    var searchNumber = "";
    searchedId === null ? searchNumber = "" : searchNumber = searchedId.toString();
    if (!isNaN(searchNumber)) {
      setFilteredData(
        sales.filter((item) => item.Id.toString().startsWith(searchNumber))
      );
    } else {
      setFilteredData(sales);
    }
  }, [searchedId, sales]);
  return (
    <>
      <div className="bg-lightBlue h-[900px] relative">
        <div className="font-gemunu mt-4">
          <div className="justify-center flex mb-4 mt-4 relative h-[120px] relative">
            <div className="mt-16 flex">
              <label htmlFor="" className="mt-3 mr-2 text-xl font-semibold ">
                Bilet ID:
              </label>
              <input
                type="text"
                className="rounded-l h-[45px] w-[250px]"
                placeholder="Lütfen bilet ID numarasını giriniz.."
                value={searchedId}
                onChange={(e) => setSearchedId(e.target.value)}
              />
              <button className="h-[45px] rounded-r p-2 hover:bg-blue border duration-300 transition border-blue">
                <FaSearch className="text-xl ml-1 " />
              </button>
              {isClicked && (
                <div className="absolute right-5 bottom-1">
                  <button className="p-2 bg-red rounded font-semibold">
                    Bileti İptal Et
                  </button>
                  <button className="p-2 bg-yellow rounded font-semibold ml-2">
                    Değiştir
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="mx-4 overflow-y-auto max-h-[700px] h-full">
            <table className="w-full text-center border-collapse ">
              <thead className="sticky top-0 bg-lightBlue">
                <tr className="font-bold h-12 border border-white">
                  <th>Bilet ID</th>
                  <th>Müşteri ID</th>
                  <th>Müşteri Adı</th>
                  <th>Sefer ID</th>
                  <th>Koltuk Numarası</th>
                  <th>Bilet Fiyatı</th>
                </tr>
              </thead> 
              <tbody>
                {currentData.map((sale, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-300 font-semibold h-8 border-b border-gray-300"
                    onClick={() => handleClick(sale.Id)}
                    style={{
                      backgroundColor:
                        selectedRow === sale.Id ? "#d45d55" : "white",
                    }}
                  >
                    <td>{sale.Id}</td>
                    <td>{sale.customerId}</td>
                    <td>{sale.customerName}</td>
                    <td>{sale.expeditionId}</td>
                    <td>{sale.seatNumber}</td>
                    <td>{sale.ticketPrice}₺</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="absolute bottom-3 right-3">
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm mt-12"
              aria-label="Pagination"
            >
              <a
                href="#"
                className={
                  currentPage <= 1
                    ? "relative inline-flex items-center rounded-l-md px-2 py-1 text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:bg-red duration-300 bg-gray-300"
                    : "relative inline-flex items-center rounded-l-md px-2 py-1 text-darkBlue ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:bg-light duration-300 bg-light"
                }
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="sr-only">Previous</span>
                <CgChevronLeft className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="#"
                className={
                  currentPage >= totalPages
                    ? "relative inline-flex items-center rounded-r-md px-2 py-1 text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:bg-red duration-300 bg-gray-300"
                    : "relative inline-flex items-center rounded-r-md px-2 py-1 text-gray ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:bg-light duration-300 bg-light"
                }
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="sr-only">Next</span>
                <CgChevronRight className="h-6 w-6" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default SaleCancellation;
