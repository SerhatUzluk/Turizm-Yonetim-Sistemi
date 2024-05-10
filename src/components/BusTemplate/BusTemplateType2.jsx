import React, { useState } from "react";
import "../Style/BusType2Style.css";
import SeatInformationBar from "./SeatInformationBar";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";
function BusTemplateType2() {
  const [isOpen, setIsOpen] = useState(false);
  const [seatNumber, setSeatNumber] = useState(null);
  const [gender, setGender] = useState(null);
  function handleButtonClick(buttonValue) {
    setIsOpen(!isOpen);
    setSeatNumber(buttonValue);
    setGender(null)
  }
  function handleGenderButtonClick(genderValue){
    setGender(genderValue)
  }  

  return (
    <>
      <div className="block">
        <div className="busLayoutType2 font-gemunu">
          <div className="driverPartType2">
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
                  <button className="seat focus:bg-yellow" onClick={() => handleButtonClick(4)}>
                    4
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button className="seat focus:bg-yellow" onClick={() => handleButtonClick(3)}>
                    3
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button className="seat focus:bg-yellow" onClick={() => handleButtonClick(8)}>
                    8
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button className="seat focus:bg-yellow" onClick={() => handleButtonClick(7)}>
                    7
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(12)}
                  >
                    12
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(11)}
                  >
                    11
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(16)}
                  >
                    16
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(15)}
                  >
                    15
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(20)}
                  >
                    20
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(19)}
                  >
                    19
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat ">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(24)}
                  >
                    24
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(23)}
                  >
                    23
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat entranceType2"></div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(32)}
                  >
                    32
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(31)}
                  >
                    31
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(36)}
                  >
                    36
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(35)}
                  >
                    35
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(40)}
                  >
                    40
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(39)}
                  >
                    39
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(44)}
                  >
                    44
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(43)}
                  >
                    43
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(48)}
                  >
                    48
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(47)}
                  >
                    47
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(52)}
                  >
                    52
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(51)}
                  >
                    51
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(56)}
                  >
                    56
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(55)}
                  >
                    55
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(61)}
                  >
                    61
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(60)}
                  >
                    60
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(59)}
                  >
                    59
                  </button>
                  <div className="back"></div>
                </div>
              </div>
            </div>

            <div className="leftSideType2">
              <div className="doubleSeat">
                <div className="seatPart">
                  <button className="seat focus:bg-yellow" onClick={() => handleButtonClick(2)}>
                    2
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button className="seat focus:bg-yellow" onClick={() => handleButtonClick(1)}>
                    1
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button className="seat focus:bg-yellow" onClick={() => handleButtonClick(6)}>
                    6
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button className="seat focus:bg-yellow" onClick={() => handleButtonClick(5)}>
                    5
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(10)}
                  >
                    10
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button className="seat focus:bg-yellow" onClick={() => handleButtonClick(9)}>
                    9
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(14)}
                  >
                    14
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(13)}
                  >
                    13
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(18)}
                  >
                    18
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(17)}
                  >
                    17
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(22)}
                  >
                    22
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(21)}
                  >
                    21
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat ">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(26)}
                  >
                    26
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(25)}
                  >
                    25
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(28)}
                  >
                    28
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(27)}
                  >
                    27
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(30)}
                  >
                    30
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(29)}
                  >
                    29
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(34)}
                  >
                    34
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(33)}
                  >
                    33
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(38)}
                  >
                    38
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(37)}
                  >
                    37
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(42)}
                  >
                    42
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(41)}
                  >
                    41
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(46)}
                  >
                    46
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(45)}
                  >
                    45
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(50)}
                  >
                    50
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(49)}
                  >
                    49
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(54)}
                  >
                    54
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(53)}
                  >
                    53
                  </button>
                  <div className="back"></div>
                </div>
              </div>
              <div className="doubleSeat">
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(58)}
                  >
                    58
                  </button>
                  <div className="back"></div>
                </div>
                <div className="seatPart">
                  <button
                    className="seat focus:bg-yellow"
                    onClick={() => handleButtonClick(57)}
                  >
                    57
                  </button>
                  <div className="back"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
        <SeatInformationBar />
        {isOpen && (
          <div className="text-2xl bg-gray-400 w-[115px] h-[50px] pl-2 pr-2 mt-4 ml-6 text-white">            
              <button className="bg-blue p-2 mr-1 rounded mt-1 focus:scale-105 focus:bg-lightBlue ml-1 focus:border"
                onClick={() => setGender('Erkek')}
              >
                <FcBusinessman />                
              </button>
              <button className="bg-pink p-2 rounded ml-1 focus:scale-105 focus:bg-lightBlue focus:border"
                onClick={() => setGender('Kadın')}
              >
                <FcBusinesswoman />                 
              </button>            
          </div>
        )}
        {isOpen && (
          <div className="font-semibold bg-gray-400 h-[50px] mt-4 p-1 font-gemunu text-lg">
          <p className="mt-2">{gender}</p>
        </div>
        )}
        
      </div>
      </div>
    </>
  );
}

export default BusTemplateType2;
