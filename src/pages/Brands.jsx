import React, { useState } from "react";
import {Information} from '.././BrandInformation.js'
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { Link } from "react-router-dom";


function Brands() {

  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(Information.length / pageSize);
  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, Information.length);
  const currentData = Information.slice(startIndex, endIndex);
  
  const goToPage = (pageNumber) => {
    if (pageNumber <= totalPages && pageNumber >= 1)
    setCurrentPage(pageNumber);    
  console.log(currentPage);        
  };

  return (
    <>
    <div><h3 className="text-4xl font-bold text-center mt-16 mb-16 font-gemunu">Turizm Firmaları</h3></div>
    { ( currentData.map((item, index) =>
    <div key={index} className="flex items-center border mb-2 font-gemunu ">
        <div className="">
           <Link><img src={item.logo} alt="" className="border w-[400px] h-[400px] mb-2 mt-2 ml-2 hover:scale-105 duration-300 transition rounded" /></Link>
        </div>
        <div className=" ml-6  ">
            <h6 className="mt-4 font-bold text-2xl">{item.name}</h6>
            <p className="text-lg w-[250px] h-[300px] mt-6">{item.description}</p>
            <button className="bg-lightBlue p-3 rounded text-lg font-semibold ml-[250px] hover:bg-darkBlue hover:text-white duration-300 transition mb-2">Firma Sayfasına Gitmek İçin Tıklayın</button>
        </div>
    </div>))
}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{1 + (currentPage - 1 )* 10}</span> to{" "}
              <span className="font-medium">{Information.length < currentPage * pageSize ? Information.length : currentPage * pageSize}</span> of{" "}
              <span className="font-medium">{Information.length}</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className={currentPage <= 1 ?"relative inline-flex items-center rounded-l-md px-3 py-3 text-gray-300 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:bg-light duration-300": "relative inline-flex items-center rounded-l-md px-3 py-3 text-darkBlue ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:bg-light duration-300"}                 
                onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}
              >
                <span className="sr-only">Previous</span>
                <CgChevronLeft className="h-6 w-6" aria-hidden="true" />
              </a>              
              <a
                href="#"
                className={currentPage >= totalPages ?"relative inline-flex items-center rounded-r-md px-3 py-3 text-gray-300 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:bg-light duration-300": "relative inline-flex items-center rounded-r-md px-3 py-3 text-gray ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:bg-light duration-300"}                 
                onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}
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
export default Brands;