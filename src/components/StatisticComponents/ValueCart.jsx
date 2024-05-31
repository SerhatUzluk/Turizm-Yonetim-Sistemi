import React from "react";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { TiEquals } from "react-icons/ti";

function ValueCart({ description, revenue, cost }) {
  const formatNumber = (number) => {
    return new Intl.NumberFormat("tr-TR", {
      maximumSignificantDigits: 3,
    }).format(number);
  };
  return (
    <>
      <div className="block w-[250px] h-[100px] text-center mt-12 mb-6 rounded shadow-md ml-2 bg-adminLight relative">
        <h6 className="text-3xl font-bold">{description}</h6>
        <hr
          className="h-1 ml-4 mr-4 mt-2"
          style={{
            backgroundColor: revenue - cost < 0 ? "#fa342d" : "#26a69a",
          }}
        />
        <div className="mt-2">
          <p className="text-3xl font-semibold">
            {formatNumber(revenue - cost)} ₺
          </p>
        </div>
        <div className="absolute right-2 top-2">
          {revenue - cost < 0 ? (
            <TiMinus className="bg-red rounded" />
          ) : revenue - cost > 0 ? (
            <TiPlus className="bg-green rounded" />
          ) : (
            <TiEquals className="bg-white rounded" />
          )}
        </div>
      </div>
    </>
  );
}

export default ValueCart;
