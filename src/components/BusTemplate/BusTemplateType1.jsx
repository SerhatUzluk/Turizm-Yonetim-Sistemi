import { React, useState, useEffect } from "react";
import "../Style/BusType1Style.css";
import SeatInformationBar from "./SeatInformationBar";
import { useDispatch, useSelector } from "react-redux";
import { isOpen } from "../../redux/slices/GenderButtonSlice";
import GenderButton from "./GenderButton";
import { close } from "../../redux/slices/GenderButtonSlice";

function BusTemplateType1({ onRemove, plate }) {
  const { Open } = useSelector((state) => state.genderButton);  
  const [seatNumber, setSeatNumber] = useState(null);
  const dispatch = useDispatch();
  function handleButtonClick(buttonValue) {
    if (seatNumber === buttonValue) {
      setSeatNumber(null);
    } else {
      setSeatNumber(buttonValue);
    }
  }

  const openFunc = () => {
    if (seatNumber === null) {
      dispatch(close());
    } else {
      dispatch(isOpen());
      console.log(Open);
    }
  };

  useEffect(() => {
    openFunc();
  }, [seatNumber]);

  return (
    <>
      <div className="block relative">
        <div className="busLayout font-gemunu">
          <div className="driverPart">
            <svg width="60" height="60" viewBox="0 0 100 100" className="">
              <circle
                cx="40"
                cy="50"
                r="35"
                stroke="black"
                stroke-width="7"
                fill="none"
              />
              <line
                x1="40"
                y1="15"
                x2="40"
                y2="85"
                stroke="black"
                stroke-width="14"
              />
              <line
                x1="40"
                y1="50"
                x2="75"
                y2="50"
                stroke="black"
                stroke-width="15"
              />
              <line
                x1="40"
                y1="30"
                x2="70"
                y2="50"
                stroke="black"
                stroke-width="15"
                transform="rotate()"
              />
              <line
                x1="40"
                y1="70"
                x2="70"
                y2="50"
                stroke="black"
                stroke-width="15"
              />
              <circle
                cx="42"
                cy="50"
                r="5"
                stroke="ghostWhite"
                stroke-width="3"
                fill="none"
              />

              <line
                x1="100"
                y1="100"
                x2="100"
                y2="0"
                stroke="black"
                stroke-width="10"
              />
            </svg>
          </div>

          <div className="seatsPart">
            <div className="rightSide">
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 2 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(2);
                      }
                    }}
                  >
                    2
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 3 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(3);
                      }
                    }}
                  >
                    3
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 5 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(5);
                      }
                    }}
                  >
                    5
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 6 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(6);
                      }
                    }}
                  >
                    6
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 8 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(8);
                      }
                    }}
                  >
                    8
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 9 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(9);
                      }
                    }}
                  >
                    9
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 11 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(11);
                      }
                    }}
                  >
                    11
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 12 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(12);
                      }
                    }}
                  >
                    12
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 14 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(14);
                      }
                    }}
                  >
                    14
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 15 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(15);
                      }
                    }}
                  >
                    15
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat ">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 17 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(17);
                      }
                    }}
                  >
                    17
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 18 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(18);
                      }
                    }}
                  >
                    18
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat entrance"></div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 20 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(20);
                      }
                    }}
                  >
                    20
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 21 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(21);
                      }
                    }}
                  >
                    21
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 23 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(23);
                      }
                    }}
                  >
                    23
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 24 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(24);
                      }
                    }}
                  >
                    24
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 26 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(26);
                      }
                    }}
                  >
                    26
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 27 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(27);
                      }
                    }}
                  >
                    27
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 29 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(29);
                      }
                    }}
                  >
                    29
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 30 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(30);
                      }
                    }}
                  >
                    30
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 32 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(32);
                      }
                    }}
                  >
                    32
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 33 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(33);
                      }
                    }}
                  >
                    33
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 35 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(35);
                      }
                    }}
                  >
                    35
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{
                      backgroundColor: seatNumber === 36 ? "#fcba03" : "white",
                    }}
                    onClick={() => {
                      {
                        handleButtonClick(36);
                      }
                    }}
                  >
                    36
                  </button>
                  <button className="back"></button>
                </div>
              </div>
            </div>
            <div className="leftSide">
              <div className="seatPart">
                <button
                  className="seat"
                  style={{
                    backgroundColor: seatNumber === 1 ? "#fcba03" : "white",
                  }}
                  onClick={() => {
                    {
                      handleButtonClick(1);
                    }
                  }}
                >
                  1
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{
                    backgroundColor: seatNumber === 4 ? "#fcba03" : "white",
                  }}
                  onClick={() => {
                    {
                      handleButtonClick(4);
                    }
                  }}
                >
                  4
                </button>
                <button className="back"></button>
              </div>

              <div className="seatPart">
                <button
                  className="seat"
                  style={{
                    backgroundColor: seatNumber === 7 ? "#fcba03" : "white",
                  }}
                  onClick={() => {
                    {
                      handleButtonClick(7);
                    }
                  }}
                >
                  7
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{
                    backgroundColor: seatNumber === 10 ? "#fcba03" : "white",
                  }}
                  onClick={() => {
                    {
                      handleButtonClick(10);
                    }
                  }}
                >
                  10
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{
                    backgroundColor: seatNumber === 13 ? "#fcba03" : "white",
                  }}
                  onClick={() => {
                    {
                      handleButtonClick(13);
                    }
                  }}
                >
                  13
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{
                    backgroundColor: seatNumber === 16 ? "#fcba03" : "white",
                  }}
                  onClick={() => {
                    {
                      handleButtonClick(16);
                    }
                  }}
                >
                  16
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{
                    backgroundColor: seatNumber === 19 ? "#fcba03" : "white",
                  }}
                  onClick={() => {
                    {
                      handleButtonClick(19);
                    }
                  }}
                >
                  19
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{
                    backgroundColor: seatNumber === 22 ? "#fcba03" : "white",
                  }}
                  onClick={() => {
                    {
                      handleButtonClick(22);
                    }
                  }}
                >
                  22
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{
                    backgroundColor: seatNumber === 25 ? "#fcba03" : "white",
                  }}
                  onClick={() => {
                    {
                      handleButtonClick(25);
                    }
                  }}
                >
                  25
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{
                    backgroundColor: seatNumber === 28 ? "#fcba03" : "white",
                  }}
                  onClick={() => {
                    {
                      handleButtonClick(28);
                    }
                  }}
                >
                  28
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{
                    backgroundColor: seatNumber === 31 ? "#fcba03" : "white",
                  }}
                  onClick={() => {
                    {
                      handleButtonClick(31);
                    }
                  }}
                >
                  31
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{
                    backgroundColor: seatNumber === 34 ? "#fcba03" : "white",
                  }}
                  onClick={() => {
                    {
                      handleButtonClick(34);
                    }
                  }}
                >
                  34
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{
                    backgroundColor: seatNumber === 37 ? "#fcba03" : "white",
                  }}
                  onClick={() => {
                    {
                      handleButtonClick(37);
                    }
                  }}
                >
                  37
                </button>
                <button className="back"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <p className="font-bold mx-2 border-black border-2 bg-blue text-white rounded-lg p-2">
            Plaka: {plate}
          </p>
          <button
            onClick={onRemove}
            className="w-10 h-10 bg-red-700 rounded-xl text-white bg-red mr-5"
          >
            Sil
          </button>

          <SeatInformationBar />

          <div className="">
            <GenderButton Open={Open} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BusTemplateType1;
