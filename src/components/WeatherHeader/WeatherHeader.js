import { useState } from "react";

export default function WeatherHeader(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationName, setLocationName] = useState("Gevgelija");

  const onSearch = (search) => {
    setSearchQuery(search);
    setLocationName(search);
    props.handleSearch(search);
  };

  return (
    <div className="weather-header">
      <h1>Weather Outlook for {locationName}</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Location..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
