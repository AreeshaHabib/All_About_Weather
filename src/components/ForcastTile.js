import React, { useEffect, useState } from "react";
import { UilTemperature, UilTear, UilWind } from "@iconscout/react-unicons";
import moment from "moment";

function ForcastTile({ weatherdata }) {
  const [finalData, setFinalData] = useState();

  useEffect(() => {
    weatherInfo();
  }, [weatherdata]);

  const weatherInfo = () => {
    setFinalData(weatherdata);
  };

  return (
    <div>
      <div className="md:grid md:grid-rows-1 md:grid-flow-col md:gap-1 md:px-2 px-10 py-5 xl:p-10 ">
        {finalData &&
          finalData?.list?.map((result, key) => (
            <div
              key={key}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 py-5 my-5 xl:w-60 p-5 md:p-2 rounded"
            >
              <div className="flex items-center justify-center my-6">
                <p className="text-white text-[14px] font-extralight">
                  {moment(result.dt_txt).format("dddd | Do MMMM YYYY")}
                </p>
              </div>
              <div className="flex items-center justify-center my-3">
                <p className="text-white xl:text-2xl text-sm font-medium">
                  {weatherdata?.city?.name}, {weatherdata?.city?.country}
                </p>
              </div>
              {result &&
                result.weather.map((x, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-center">
                      <img
                        src={`https://openweathermap.org/img/wn/${x.icon}@2x.png`}
                        className="w-18"
                      />
                    </div>
                    <div className="flex items-center justify-center py-6 xl:text-xl text-sm text-cyan-300">
                      <p>{x.description}</p>
                    </div>
                  </div>
                ))}
              <div className=" flex xl:flex-row flex-col items-center justify-between">
                <div className="flex xl:flex-row items-center justify-between text-white py-5 ">
                  <p className="xl:text-4xl text-4xl">
                    {Math.round(result.main.temp)}°C
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1" />
                    <p>Real Feel:</p>
                    <span className="font-medium ml-1">
                      {Math.round(result.main.feels_like)}°C
                    </span>
                  </div>

                  <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1" />
                    <p>Humidity:</p>
                    <span className="font-medium ml-1">
                      {Math.round(result.main.humidity)}%
                    </span>
                  </div>

                  <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1" />
                    <p>Wind:</p>
                    <span className="font-medium ml-1">
                      {Math.round(result.wind.speed)}Km/h
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ForcastTile;
