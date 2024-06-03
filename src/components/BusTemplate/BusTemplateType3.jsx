import { React, useEffect, useState } from "react";
import "../Style/BustType3Style.css";
import SeatInformationBar from "./SeatInformationBar";
import { useDispatch, useSelector } from "react-redux";
import { isOpen, close } from "../../redux/slices/GenderButtonSlice";
import GenderButton from "./GenderButton";
function BusTemplateType3({onRemove,plate}) {
  const { Open } = useSelector((state) => state.genderButton);
  const [seatNumber, setSeatNumber] = useState(null);
  const dispatch = useDispatch();
  function handleButtonClick(buttonValue) {
    if(seatNumber === buttonValue){
      setSeatNumber(null);
    }
    else{
      setSeatNumber(buttonValue)
    }
  }

  const openFunc = () => {
    if(seatNumber === null){
      dispatch(close());
    }
    else{
      dispatch(isOpen());
    }
  };

  useEffect(() => {
    openFunc();
  }, [seatNumber])
  return (
    <>
      <div className="block">
        <div className="busLayoutType3 font-gemunu">
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

          <div className="seatsPartType3">
            <div className="rightSideType3">
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 3 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(3);
                        openFunc();
                      }
                    }}
                  >
                    3
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 2 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(2);
                        openFunc();
                      }
                    }}
                  >
                    2
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 6 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(6);
                        openFunc();
                      }
                    }}
                  >
                    6
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 5 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(5);
                        openFunc();
                      }
                    }}
                  >
                    5
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 9 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(9);
                        openFunc();
                      }
                    }}
                  >
                    9
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 8 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(8);
                        openFunc();
                      }
                    }}
                  >
                    8
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 12 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(12);
                        openFunc();
                      }
                    }}
                  >
                    12
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 11 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(11);
                        openFunc();
                      }
                    }}
                  >
                    11
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 15 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(15);
                        openFunc();
                      }
                    }}
                  >
                    15
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 14 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(14);
                        openFunc();
                      }
                    }}
                  >
                    14
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat ">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 18 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(18);
                        openFunc();
                      }
                    }}
                  >
                    18
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 17 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(17);
                        openFunc();
                      }
                    }}
                  >
                    17
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 23 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(23);
                        openFunc();
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
                    style={{ backgroundColor: seatNumber === 22 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(22);
                        openFunc();
                      }
                    }}
                  >
                    22
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat entranceType3"></div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 26 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(26);
                        openFunc();
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
                    style={{ backgroundColor: seatNumber === 25 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(25);
                        openFunc();
                      }
                    }}
                  >
                    25
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 29 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(29);
                        openFunc();
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
                    style={{ backgroundColor: seatNumber === 28 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(28);
                        openFunc();
                      }
                    }}
                  >
                    28
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 32 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(32);
                        openFunc();
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
                    style={{ backgroundColor: seatNumber === 31 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(31);
                        openFunc();
                      }
                    }}
                  >
                    31
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 35 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(35);
                        openFunc();
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
                    style={{ backgroundColor: seatNumber === 34 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(34);
                        openFunc();
                      }
                    }}
                  >
                    34
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 38 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(38);
                        openFunc();
                      }
                    }}
                  >
                    38
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 37 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(37);
                        openFunc();
                      }
                    }}
                  >
                    37
                  </button>
                  <button className="back"></button>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 40 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(40);
                        openFunc();
                      }
                    }}
                  >
                    40
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 39 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(39);
                        openFunc();
                      }
                    }}
                  >
                    39
                  </button>
                  <button className="back"></button>
                </div>
                <div className="seatPart">
                  <button
                    className="seat"
                    style={{ backgroundColor: seatNumber === 41 ? "#fcba03" : "white" }}
                    onClick={() => {
                      {
                        handleButtonClick(41);
                        openFunc();
                      }
                    }}
                  >
                    41
                  </button>
                  <button className="back"></button>
                </div>
              </div>
            </div>
            <div className="leftSideType3">
              <div className="seatPart">
                <button
                  className="seat"
                  style={{ backgroundColor: seatNumber === 1 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick();
                      openFunc();
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
                  style={{ backgroundColor: seatNumber === 4 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick(4);
                      openFunc();
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
                  style={{ backgroundColor: seatNumber === 7 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick(7);
                      openFunc();
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
                  style={{ backgroundColor: seatNumber === 10 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick(10);
                      openFunc();
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
                  style={{ backgroundColor: seatNumber === 13 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick(13);
                      openFunc();
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
                  style={{ backgroundColor: seatNumber === 16 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick(16);
                      openFunc();
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
                  style={{ backgroundColor: seatNumber === 19 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick(19);
                      openFunc();
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
                  style={{ backgroundColor: seatNumber === 20 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick(20);
                      openFunc();
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
                  style={{ backgroundColor: seatNumber === 21 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick(21);
                      openFunc();
                    }
                  }}
                >
                  21
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{ backgroundColor: seatNumber === 24 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick(24);
                      openFunc();
                    }
                  }}
                >
                  24
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{ backgroundColor: seatNumber === 27 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick(27);
                      openFunc();
                    }
                  }}
                >
                  27
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{ backgroundColor: seatNumber === 30 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick(30);
                      openFunc();
                    }
                  }}
                >
                  30
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{ backgroundColor: seatNumber === 33 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick(33);
                      openFunc();
                    }
                  }}
                >
                  33
                </button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button
                  className="seat"
                  style={{ backgroundColor: seatNumber === 36 ? "#fcba03" : "white" }}
                  onClick={() => {
                    {
                      handleButtonClick(36);
                      openFunc();
                    }
                  }}
                >
                  36
                </button>
                <button className="back"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
        <p className="font-bold mx-2 border-black border-2 bg-blue text-white rounded-lg p-2">Plaka: {plate}</p>
          <button
            onClick={onRemove}
            className="w-10 h-10 bg-red-700 rounded-xl text-white bg-red mr-5"
          >
            Sil
          </button>
          <SeatInformationBar />

          <GenderButton Open={Open} />
        </div>
      </div>
    </>
  );
}

export default BusTemplateType3;
