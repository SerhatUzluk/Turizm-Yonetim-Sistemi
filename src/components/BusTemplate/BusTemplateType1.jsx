import { React, useState } from "react";
import "../Style/BusType1Style.css";
import SeatInformationBar from "./SeatInformationBar";
import { useDispatch, useSelector } from "react-redux";
import { isOpen } from "../../redux/slices/GenderButtonSlice";
import GenderButton from "./GenderButton";

function BusTemplateType1() {
  const { Open } = useSelector((state) => state.genderButton);
  const [seatNumber, setSeatNumber] = useState(null);
  const dispatch = useDispatch();
  function handleButtonClick(buttonValue) {
    setSeatNumber(buttonValue);
  }
  const openFunc = () => {
    dispatch(isOpen());
  };

  return (
    <>
      <div className="block">
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
                    onClick={() => {
                      {
                        handleButtonClick(4);
                        openFunc();
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
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
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
                <div className="seatPart">
                  <button
                    className="seat"
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
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
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
                <div className="seatPart">
                  <button
                    className="seat"
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
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
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
                <div className="seatPart">
                  <button
                    className="seat"
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
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
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
                <div className="seatPart">
                  <button
                    className="seat"
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
              </div>
              <div className="doubleSeat ">
                <div className="seatPart">
                  <button
                    className="seat"
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
                <div className="seatPart">
                  <button
                    className="seat"
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
              </div>
              <div className="doubleSeat entrance"></div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
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
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
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
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
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
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
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
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
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
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat"
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
            <div className="leftSide">
              <div className="seatPart">
                <button
                  className="seat"
                  onClick={() => {
                    {
                      handleButtonClick(1);
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
              <div className="seatPart">
                <button
                  className="seat"
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
              <div className="seatPart">
                <button
                  className="seat"
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
              <div className="seatPart">
                <button
                  className="seat"
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
              <div className="seatPart">
                <button
                  className="seat"
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
              <div className="seatPart">
                <button
                  className="seat"
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
          </div>
        </div>
        <SeatInformationBar />
        <GenderButton Open={Open} />
      </div>
    </>
  );
}

export default BusTemplateType1;
