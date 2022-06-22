import moment from "moment";

export default function Forecast(props) {
  return (
    <div>
      <h2>
        {moment(props.forecast.valid_date).format("X") ===
        moment().startOf("day").format("X")
          ? "Today"
          : moment(props.forecast.valid_date).format("dddd")}
      </h2>
      <img
        src={`https://www.weatherbit.io/static/img/icons/${props.forecast.weather.icon}.png`}
        alt={props.forecast.weather.description}
        className="weather-icon"
      />
      <p>
        {`${props.forecast.temp}℃ |
        ${props.forecast.wind_spd} knot`}
      </p>
    </div>
  );
}
