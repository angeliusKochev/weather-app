import axios from "axios";
import { useEffect, useState } from "react";
import Forecast from "../Forecast/Forecast";
import WeatherHeader from "../WeatherHeader/WeatherHeader";

export default function Weather(props) {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState("Gevgelija");

  useEffect(() => {
    axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?key=c89df4ba49c144dabb4b9ae1e0c9c37b&city=${location}&days=6`
      )
      .then((resp) => {
        setForecasts(resp.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [location]);

  function handleSearch(loc) {
    setLocation(loc);
  }

  return (
    <>
      <WeatherHeader handleSearch={handleSearch} />
      <div className="forecast">
        {forecasts &&
          forecasts.map((forecast, index) => {
            return <Forecast key={index} forecast={forecast} />;
          })}
      </div>
    </>
  );
}
