import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts";
import Ratings from "../../components/StatisticComponents/Ratings";
import ValueCart from "../../components/StatisticComponents/ValueCart";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { TiEquals } from "react-icons/ti";

function Statistics() {
  const [isResponsive, setIsResponsive] = React.useState(false);
  const [cost, setCost] = React.useState({
    January: 0,
    February: 0,
    March: 0,
    April: 600000,
    May: 0,
    June: 0,
    July: 1200000,
    August: 985000,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  });
  const [revenueValues, setRevenueValue] = React.useState({
    January: 0,
    February: 0,
    March: 0,
    April: 70000,
    May: 0,
    June: 1470000,
    July: 4000000,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  });

  const calculateTotalRevenue = (revenues) => {
    return Object.values(revenues).reduce((total, value) => total + value, 0);
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("tr-TR", {
      maximumSignificantDigits: 3,
    }).format(number);
  };

  const getMonthKey = (month) => {
    switch (month) {
      case "Ocak":
        return "January";
      case "Şubat":
        return "February";
      case "Mart":
        return "March";
      case "Nisan":
        return "April";
      case "Mayıs":
        return "May";
      case "Haziran":
        return "June";
      case "Temmuz":
        return "July";
      case "Ağustos":
        return "August";
      case "Eylül":
        return "September";
      case "Ekim":
        return "October";
      case "Kasım":
        return "November";
      case "Aralık":
        return "December";
      default:
        return null;
    }
  };

  const handleClick = (event) => {
    const { index } = event;
    const monthNames = [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ];
    const clickedMonth = monthNames[index];
    const revenue = revenueValues / 1000000;
    const costValue = cost[clickedMonth] / 1000000;
    const netIncome = revenue - costValue;

    console.log(index);
  };

  const Container = ResponsiveChartContainer;

  return (
    <>
      <div className="font-gemunu">
        <div className="flex justify-center mt-16 mb-16">
          <div className="w-[250px]  h-12 items-center flex justify-center rounded">
            <h6 className="text-4xl font-bold">İstatistikler</h6>
          </div>
        </div>
        <div className="flex justify-center font-bold text-2xl bg-adminBlue mt-10 h-16 items-center">
          <h6>Aylara Göre Gelir Verileri</h6>
        </div>
        <div className="mt-14 mx-4">
          <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", height: 400 }} elevation={8}>
              <Container
                series={[
                  {
                    label: "GDP",
                    type: "bar",
                    data: [
                      revenueValues.January / 1000000,
                      revenueValues.February / 1000000,
                      revenueValues.March / 1000000,
                      revenueValues.April / 1000000,
                      revenueValues.May / 1000000,
                      revenueValues.June / 1000000,
                      revenueValues.July / 1000000,
                      revenueValues.August / 1000000,
                      revenueValues.September / 1000000,
                      revenueValues.October / 1000000,
                      revenueValues.November / 1000000,
                      revenueValues.December / 1000000,
                    ],
                    slotProps: {
                      legend: { hidden: true },
                      tooltip: {
                        // Tooltip içeriklerini özelleştirin
                        render: (params) => {
                          const { dataIndex } = params;
                          const { name, gdp } = dataset[dataIndex];
                          return (
                            <div>
                              <strong>{name}</strong>
                              <br />
                              GDP: ${gdp.toFixed(2)}M
                            </div>
                          );
                        },
                      },
                    },
                  },
                  {
                    type: "line",
                    data: [
                      cost.January / 1000000,
                      cost.February / 1000000,
                      cost.March / 1000000,
                      cost.April / 1000000,
                      cost.May / 1000000,
                      cost.June / 1000000,
                      cost.July / 1000000,
                      cost.August / 1000000,
                      cost.September / 1000000,
                      cost.October / 1000000,
                      cost.November / 1000000,
                      cost.December / 1000000,
                    ],
                  },
                ]}
                xAxis={[
                  {
                    data: [
                      "Ocak",
                      "Şubat",
                      "Mart",
                      "Nisan",
                      "Mayıs",
                      "Haziran",
                      "Temmuz",
                      "Ağustos",
                      "Eylül",
                      "Ekim",
                      "Kasım",
                      "Aralık",
                    ],
                    scaleType: "band",
                    id: "x-axis-id",
                    onClick: handleClick,
                  },
                ]}
                yAxis={[
                  {
                    scaleType: "linear",
                    id: "y-axis-id",
                    label: "Gelir (Milyon ₺)",
                    min: 0,
                    max: 5,
                    tickInterval: 1,
                  },
                ]}
              >
                <BarPlot />
                <LinePlot />
                <MarkPlot />
                <ChartsYAxis position="left" axisId="y-axis-id" />
                <ChartsXAxis position="bottom" axisId="x-axis-id" />
              </Container>
            </Paper>
          </Box>

          <div className="flex-wrap flex justify-center mt-12 mb-16">
            <ValueCart
              description={"Ocak Net Geliri"}
              revenue={revenueValues.January}
              cost={cost.January}
            />
            <ValueCart
              description={"Şubat Net Geliri"}
              revenue={revenueValues.February}
              cost={cost.February}
            />
            <ValueCart
              description={"Mart Net Geliri"}
              revenue={revenueValues.March}
              cost={cost.March}
            />
            <ValueCart
              description={"Nisan Net Geliri"}
              revenue={revenueValues.April}
              cost={cost.April}
            />
            <ValueCart
              description={"Mayıs Net Geliri"}
              revenue={revenueValues.May}
              cost={cost.May}
            />
            <ValueCart
              description={"Haziran Net Geliri"}
              revenue={revenueValues.June}
              cost={cost.June}
            />
            <ValueCart
              description={"Temmuz Net Geliri"}
              revenue={revenueValues.July}
              cost={cost.July}
            />
            <ValueCart
              description={"Ağustos Net Geliri"}
              revenue={revenueValues.August}
              cost={cost.August}
            />
            <ValueCart
              description={"Eylül Net Geliri"}
              revenue={revenueValues.September}
              cost={cost.September}
            />
            <ValueCart
              description={"Ekim Net Geliri"}
              revenue={revenueValues.October}
              cost={cost.October}
            />
            <ValueCart
              description={"Kasım Net Geliri"}
              revenue={revenueValues.November}
              cost={cost.November}
            />
            <ValueCart
              description={"Aralık Net Geliri"}
              revenue={revenueValues.December}
              cost={cost.December}
            />
          </div>

          <div className="flex justify-center font-bold text-2xl bg-adminBlue mt-10 h-16 items-center">
            {" "}
            <h6>Yıllık Gelir Verileri</h6>
          </div>
          <div className="flex justify-center mb-16 mt-12">
            <div className="block ">
              <div className="flex">
                <div className="block w-[250px] h-[90px] text-center mt-12 mb-6 rounded shadow-md bg-adminLight">
                  <h6 className="text-3xl font-bold">Yıllık Toplam Gelir</h6>
                  <hr className="bg-adminBlue h-1 ml-4 mr-4" />
                  <div className="mt-2">
                    <p className="text-3xl font-semibold">
                      {formatNumber(calculateTotalRevenue(revenueValues))} ₺
                    </p>
                  </div>
                </div>
                <div className="block w-[250px] h-[90px] text-center mt-12 mb-6 rounded shadow-md ml-16 bg-adminLight">
                  <h6 className="text-3xl font-bold">Yıllık Toplam Gider</h6>
                  <hr className="bg-red h-1 ml-4 mr-4" />
                  <div className="mt-2">
                    <p className="text-3xl font-semibold">
                      {formatNumber(calculateTotalRevenue(cost))} ₺
                    </p>
                  </div>
                </div>
              </div>
              <div className="block w-[565px] mt-4 h-[90px]  text-center mb-6 rounded shadow-md bg-adminLight relative">
                <h6 className="text-3xl font-bold">Yıllık Net Gelir</h6>
                <hr className="bg-green h-1 ml-4 mr-4" />
                <div className="mt-2">
                  <p className="text-3xl font-semibold">
                    {formatNumber(
                      calculateTotalRevenue(revenueValues) -
                        calculateTotalRevenue(cost)
                    )}{" "}
                    ₺
                  </p>
                  <div className="absolute right-2 top-2"> 
                    {calculateTotalRevenue(revenueValues) -
                        calculateTotalRevenue(cost) < 0 ? (<TiMinus className="bg-red rounded"/>) : calculateTotalRevenue(revenueValues) -
                        calculateTotalRevenue(cost) > 0 ?  (<TiPlus className="bg-green rounded"/>) : (<TiEquals className="bg-white rounded"/>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center font-bold text-2xl bg-adminBlue mt-10 h-16 items-center">
          <h6>Yolcu Memnuniyet Değerleri</h6>
        </div>
        <div className="flex justify-center mt-12 mb-16">
          <div className="block font-semibold text-xl w-[450px]">
            <div className="mt-10 hover:scale-105 duration-300">
              <p>Servis ve hizmet puanı ortalaması</p>
              <div className="flex mt-2">
                <Ratings point={4} />
                <p className="ml-[150px]">3.74</p>
              </div>
              <hr />
            </div>
            <div className="mt-4 hover:scale-105 duration-300">
              <p>Şoför puan ortalaması</p>
              <div className="flex mt-2">
                <Ratings point={2.61} />
                <p className="ml-[150px]">2.61</p>
              </div>
              <hr />
            </div>
            <div className="mt-4 hover:scale-105 duration-300">
              <p>Muavin puan ortalaması</p>
              <div className="flex mt-2">
                <Ratings point={4} />
                <p className="ml-[150px]">4.74</p>
              </div>
              <hr />
            </div>
            <div className="mt-4 hover:scale-105 duration-300">
              <p>Konfor puanı ortalaması</p>
              <div className="flex mt-2">
                <Ratings point={4.74} />
                <p className="ml-[150px]">4.74</p>
              </div>
              <hr />
            </div>
            <div className="mt-4 mb-6 hover:scale-105 duration-300">
              <p>Sefer saat planına uygunluk ortalaması</p>
              <div className="flex mt-2">
                <Ratings point={3.7} />
                <p className="ml-[150px]">3.74</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
