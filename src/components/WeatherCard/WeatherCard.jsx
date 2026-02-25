import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
    if (!weatherData) return null;

  const filteredOptions = weatherOptions.filter(
    (option) =>
      option.condition === weatherData.condition &&
      option.day === weatherData.isDay
  );

  const weatherOption =
    filteredOptions[0] || weatherOptions[0];

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp.F}°F
      </p>

      <img
        src={weatherOption.url}
        alt={`Weather showing ${
          weatherData.condition
        } during ${weatherData.isDay ? "day" : "night"}`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;