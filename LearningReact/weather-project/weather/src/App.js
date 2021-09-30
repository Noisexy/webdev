import React, { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import SearchIcon from "@material-ui/icons/Search";
//import {cityArr} from "./cityData"
import cityDataArr from "./city.list.min.json";
import cloudSvg from "./cloudy-svgrepo-com.svg";
import rainSvg from "./rain-svgrepo-com.svg";
import sunSvg from "./sunny-svgrepo-com.svg";
function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState({ cityName: "", id: "" });
  const [cityData, setCityData] = useState(cityDataArr);
  const [modal, setModal] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCity({ cityName: value });
  };

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { cityName } = city;
    const citySearched = toTitleCase(cityName);
    let id = 0;
    cityData.forEach((city) => {
      if (city.name === citySearched) {
        //console.log(city.name + city.id);
        //setCity({ ...city, id: city.id });
        id = city.id;
      }
    });

    const getData = async () => {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=fb112daa76806143409fcb30828c1329`
        )
        .then((res) => {
          let a = res.data;
          setData([a]);
        });
    };

    if (id) {
      getData();
    } else {
      setModal(true);
    }
  };

  useEffect(() => {
    const { cityName } = city;
    let id = 5128638;
    cityData.forEach((city) => {
      if (city.name === cityName) {
        //console.log(city.name + city.id);
        //setCity({ ...city, id: city.id });
        id = city.id;
      }
    });

    const getData = async () => {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=fb112daa76806143409fcb30828c1329`
        )
        .then((res) => {
          let a = res.data;
          setData([a]);
        });
    };
    getData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 5000);
  }, [modal]);

  console.log("aaa");
  console.log(data);
  //console.log(cityData)
  return (
    <section className="app">
      <form className="weatherContainer" onSubmit={handleSubmit}>
        <div className="searchbarContainer">
          <input
            type="text"
            placeholder="Search city"
            name="city"
            value={city.cityName}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
        <div className="weatherInfoContainer">
          {data.map((item, id) => {
            const { main, name } = item;
            console.log(item);
            console.log(main);
            return (
              <div className="mainItem" key={id}>
                <span className="spanContainer">
                  <span className="temp">
                    {main.temp.toFixed(0)}

                    <h4>°C</h4>
                    <h6>Feels like: {main.feels_like}°C</h6>
                  </span>

                  <span className="mintemp">
                    {main.temp_min.toFixed(0)}
                    <h4>°C</h4>
                    <h6>Min</h6>
                  </span>

                  <span className="maxtemp">
                    {main.temp_max.toFixed(0)}
                    <h4>°C</h4>
                    <h6>Max</h6>
                  </span>

                  <span className="hpressure">
                    <h4 className="humidity">Humidity: {main.humidity} %</h4>

                    <h4 className="pressure">Pressure:{main.pressure} hPa</h4>

                    <h4 className="cityNameClass">City: {name}</h4>
                  </span>
                </span>
                {item.weather[0].description === "clear sky" && (
                  <>
                    <h4 className="weatherDesc">
                      Weather: {item.weather[0].description}
                    </h4>
                    <img className="weatherImg" src={sunSvg} alt=" sunny " />
                  </>
                )}
                {item.weather[0].description.includes("storm") && (
                  <>
                    <h4 className="weatherDesc">
                      Weather: {item.weather[0].description}
                    </h4>
                    <img className="weatherImg" src={rainSvg} alt=" sunny " />
                  </>
                )}
                {item.weather[0].description.includes("clouds") && (
                  <>
                    <h4 className="weatherDesc">
                      Weather: {item.weather[0].description}
                    </h4>
                    <img className="weatherImg" src={cloudSvg} alt=" sunny " />
                  </>
                )}
                {/* {item.weather[0].description === "overcast clouds" && (
                  <>
                    <h4 className="weatherDesc">
                      Weather: {item.weather[0].description}
                    </h4>
                    <img className="weatherImg" src={cloudSvg} alt=" sunny " />
                  </>
                )} */}
              </div>
            );
          })}
        </div>
      </form>
      {modal && (
        <h1 style={{ position: "absolute", top: "25%", color: "red" }}>
          City not found!
        </h1>
      )}
    </section>
  );
}

export default App;

// 5c9f608ebcf6fd7ba25ffde034aaeb26 api
//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
