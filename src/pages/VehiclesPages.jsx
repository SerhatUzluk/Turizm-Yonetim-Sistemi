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
  const [plate, setPlate] = useState("");
  const vehicles = useSelector((state) => state.vehicles.vehicles);


  const dispatch = useDispatch();

  const handleAddVehicle = () => {
    if (plate) {
      const newVehicle = { type: selectedVehicles, plate };
      dispatch(addVehicle(newVehicle));
      setPlate(""); // plaka eklendikten sonra input'u temizleyin
    } else {
      alert("Lütfen bir plaka giriniz");
    }
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

        <div className=" h-20 border-solid border rounded-lg bg-lightBlue mx-4 flex items-center justify-center">
        <input
            id="plaka"
            name="plaka"
            type="text"
            autoComplete="plaka"
            required
            value={plate}
            onChange={(e) => setPlate(e.target.value)} // onChange ekleyin
            placeholder="Lütfen buraya plaka giriniz"
            className="block w-52 rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          />
        </div>

        <div className="flex items-center justify-center pt-5 text-xl">
          <p>
            Lütfen eklemek istediğiniz araç tipini seçip, plaka kısmını
            ekleyiniz.
          </p>
        </div>
      </div>

      <div className="flex-col border-solid border-2 p-10 m-10 w-full bg-light rounded-lg">
        <div className="flex flex-col justify-center items-center space-y-20">
        {vehicles.map((comp, index) => {
            const Vehicle = vehicleMap[comp.type];
            return (
              <Vehicle
                key={index}
                plate={comp.plate} // plate bilgisini bileşene iletin
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
