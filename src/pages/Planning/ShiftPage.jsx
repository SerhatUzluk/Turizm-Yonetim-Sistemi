import React, { useState } from "react";
import { shift } from "../../PersonalShiftExample";
const data = [  
  { day: "Pazartesi" },
  { day: "Salı" },
  { day: "Çarşamba" },
  { day: "Perşembe" },
  { day: "Cuma" },
  { day: "Cumartesi" },
  { day: "Pazar" },
];

function ShiftPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [clickedDay, setClickedDay] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const triggerIsClicked = (day) => {
    event.preventDefault();
    setIsClicked(true);
    setClickedDay(day);
  };

  const getPerson = (id) => {
    setSelectedPerson(id);
    console.log(selectedPerson);
  }

  return (
    <>
      <div>
        <div className="bg-light h-[500px] flex justify-center font-gemunu">
          <form action="">
            <div className="flex mt-[100px] text-lg font-semibold justify-between w-[1250px]">
              {data.map((item, index) => (
                <button
                  key={index}
                  id={item.day}
                  className="bg-blue p-3 border rounded text-white w-[150px] text-center"
                  onClick={() => triggerIsClicked(item.day)}
                >
                  {item.day}
                </button>
              ))}
            </div>
            {isClicked && (
              <div className="bg-lightBlue rounded h-[250px] items-center w-full justify-between text-center mt-6">
                <div className="flex">
                  <div className="w-[400px] font-semibold text-lg ml-12 bg-light rounded p-2 m-2 text-center h-[60px] mt-12">
                    <label htmlFor="" className="">
                      Vardiye Başlangıç Zamanı:{" "}
                    </label>
                    <input type="time" className="w-[100px] rounded ml-8" />
                  </div>
                  <div className="w-[400px] font-semibold text-lg bg-light rounded p-2 m-2 text-center h-[60px] mt-12">
                    <label htmlFor="" className="">
                      Vardiye Bitiş Zamanı:{" "}
                    </label>
                    <input type="time" className="w-[100px] rounded ml-8" />
                  </div>
                  <div className="w-[250px] h-[50px] font-semibold text-2xl bg-light rounded p-2 m-2 text-center h-[60px] mr-12 mt-12">
                    <p className="mt-1">{clickedDay}</p>
                  </div>
                </div>
                <div>
                  <button className="p-3 bg-darkBlue text-white rounded font-semibold text-lg mt-8 hover:bg-light hover:text-darkBlue duration-300">
                    Vardiyeyi Kaydet
                  </button>
                </div>
                {selectedPerson && (<div className="bg-light w-[200px] text-left ml-2">
                  <p className="text-lg font-semibold pl-4">Personel: {shift.find((item) => item.id === selectedPerson).personName}</p>
                </div>)}
              </div>
            )}
          </form>
        </div>
        <div className="bg-lightBlue font-gemunu text-xl text-center font-semibold justify-center flex">
          <table className="border w-[1250px] rounded h-[300px] mt-12 mb-12">
            <tr>
              <td></td>
              <td></td>
              {data.map((tableItem, index) => (
                <td key={index} className="border">
                  {tableItem.day}
                </td>
              ))}
            </tr>
            {shift.map((person) => (
              <tr key={person.name} className="border">
                <td><button className="bg-blue p-3 rounded text-white hover:bg-darkBlue duration-300 transition" onClick={() => getPerson(person.id)}>{person.id}</button></td>
                <td>{person.personName}</td>
                <td className={person.pzt === "Tatil" ? "bg-yellow" : ""}>{person.pzt}</td>
                <td className={person.sali === "Tatil" ? "bg-yellow" : ""}>{person.sali}</td>
                <td className={person.crs === "Tatil" ? "bg-yellow" : ""}>{person.crs}</td>
                <td className={person.prs === "Tatil" ? "bg-yellow" : ""}>{person.prs}</td>
                <td className={person.cum === "Tatil" ? "bg-yellow" : ""}>{person.cum}</td>
                <td className={person.cmt === "Tatil" ? "bg-yellow" : ""}>{person.cmt}</td>
                <td className={person.pzr === "Tatil" ? "bg-yellow" : ""}>{person.pzr}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default ShiftPage;