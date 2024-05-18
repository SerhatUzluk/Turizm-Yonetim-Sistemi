import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVehicle, removeVehicle } from "../redux/slices/VehiclesSlice";
import Bus1 from "../components/BusTemplate/BusTemplateType1";
import Bus2 from "../components/BusTemplate/BusTemplateType2";
import Bus3 from "../components/BusTemplate/BusTemplateType3";

const vehicleMap = {
  bus1: Bus1,
  bus2: Bus2,
  bus3: Bus3,
};

const VehiclesPages = () => {
  const [selectedVehicles, setSelectedVehicles] = useState("bus1");
  const vehicles = useSelector((state) => state.vehicles.vehicles);
  const dispatch = useDispatch();

  const handleAddVehicle = () => {
    dispatch(addVehicle(selectedVehicles));
  };

  const handleRemoveVehicle = (index) => {
    dispatch(removeVehicle(index));
  };
  return (
    <div className="flex justify-center ">
      <div className="w-96 h-96 border-solid border-2 p-5 m-10 rounded-lg bg-blue text-white ">
        <div className="flex items-center justify-center p-5">
          <select
            value={selectedVehicles}
            onChange={(e) => setSelectedVehicles(e.target.value)}
            className="bg-lightBlue rounded-lg h-12 w-28"
          >
            <option value="bus1">Araç Tipi 1</option>
            <option value="bus2">Araç Tipi 2</option>
            <option value="bus3">Araç Tipi 3</option>
          </select>

          <button
            className="w-28 h-12 bg-lightBlue rounded-lg m-5"
            onClick={handleAddVehicle}
          >
            EKLE
          </button>
        </div>

        <div className="flex items-center justify-center pt-5 text-xl">
          <p>
            Lütfen eklemek istediğiniz araç tipini seçip ekle butonuna
            tıklayınız.
          </p>
        </div>
      </div>

      <div className="flex-col border-solid border-2 p-10 m-10 w-full bg-light rounded-lg">
  <div className="flex flex-col justify-center items-center space-y-20">
    {vehicles.map((comp, index) => {
      const Vehicle = vehicleMap[comp];
      return (
        <Vehicle
          key={index}
          onRemove={() => handleRemoveVehicle(index)}
        />
      );
    })}
  </div>
</div>


    </div>
  );
};

export default VehiclesPages;
