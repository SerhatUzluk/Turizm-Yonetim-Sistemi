import React from "react";
import '../Style/BustType3Style.css'
import SeatInformationBar from "./SeatInformationBar";
function BusTemplateType3() {
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

            <line x1="100" y1="100" x2="100" y2="0" stroke="black" stroke-width="10" />            
          </svg>
        </div>
       
        <div className="seatsPartType3">
          <div className="rightSideType3">
            <div className="doubleSeat">
              <div className="seatPart">
                <button className="seat">3</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button className="seat">2</button>
                <button className="back"></button>
              </div>
            </div>
            <div className="doubleSeat">
              <div className="seatPart">
                <button className="seat">6</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button className="seat">5</button>
                <button className="back"></button>
              </div>
            </div>
            <div className="doubleSeat">
              <div className="seatPart">
                <button className="seat">9</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button className="seat">8</button>
                <button className="back"></button>
              </div>
            </div>
            <div className="doubleSeat">
              <div className="seatPart">
                <button className="seat">12</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button className="seat">11</button>
                <button className="back"></button>
              </div>
            </div>
            <div className="doubleSeat">
              <div className="seatPart">
                <button className="seat">15</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button className="seat">14</button>
                <button className="back"></button>
              </div>
            </div>
            <div className="doubleSeat ">
              <div className="seatPart">
                <button className="seat">18</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button className="seat">17</button>
                <button className="back"></button>
              </div>
            </div>
            <div className="doubleSeat">
              <div className="seatPart">
                <button className="seat">23</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button className="seat">22</button>
                <button className="back"></button>
              </div>              
            </div>
            <div className="doubleSeat entranceType3"></div>
            <div className="doubleSeat">
              <div className="seatPart">
                <button className="seat">26</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button className="seat">25</button>
                <button className="back"></button>
              </div>
            </div>
            <div className="doubleSeat">
              <div className="seatPart">
                <button className="seat">29</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button className="seat">28</button>
                <button className="back"></button>
              </div>
            </div>
            <div className="doubleSeat">
              <div className="seatPart">
                <button className="seat">32</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button className="seat">31</button>
                <button className="back"></button>
              </div>
            </div>
            <div className="doubleSeat">
              <div className="seatPart">
                <button className="seat">35</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button className="seat">34</button>
                <button className="back"></button>
              </div>
            </div>
            <div className="doubleSeat">
              <div className="seatPart">
                <button className="seat">38</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button className="seat">37</button>
                <button className="back"></button>
              </div>
            </div>
            <div className="doubleSeat">
              <div className="seatPart">
                <button className="seat">40</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
                <button className="seat">39</button>
                <button className="back"></button>
              </div>
              <div className="seatPart">
              <button className="seat">41</button>
              <button className="back"></button>
            </div>              
            </div>                       
          </div>
          <div className="leftSideType3">
            <div className="seatPart">
              <button className="seat">1</button>
              <button className="back"></button>
            </div>
            <div className="seatPart">
              <button className="seat">4</button>
              <button className="back"></button>
            </div>

            <div className="seatPart">
              <button className="seat">7</button>
              <button className="back"></button>
            </div>
            <div className="seatPart">
              <button className="seat">10</button>
              <button className="back"></button>
            </div>
            <div className="seatPart">
              <button className="seat">13</button>
              <button className="back"></button>
            </div>
            <div className="seatPart">
              <button className="seat">16</button>
              <button className="back"></button>
            </div>
            <div className="seatPart">
              <button className="seat">19</button>
              <button className="back"></button>
            </div>
            <div className="seatPart">
              <button className="seat">20</button>
              <button className="back"></button>
            </div>
            <div className="seatPart">
              <button className="seat">21</button>
              <button className="back"></button>
            </div>
            <div className="seatPart">
              <button className="seat">24</button>
              <button className="back"></button>
            </div>
            <div className="seatPart">
              <button className="seat">27</button>
              <button className="back"></button>
            </div>
            <div className="seatPart">
              <button className="seat">30</button>
              <button className="back"></button>
            </div>
            <div className="seatPart">
              <button className="seat">33</button>
              <button className="back"></button>
            </div>
            <div className="seatPart">
              <button className="seat">36</button>
              <button className="back"></button>
            </div>            
          </div>
        </div>
      </div>
      <SeatInformationBar/>
      </div>

    </>
  );
}

export default BusTemplateType3;
