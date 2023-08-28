import "./style.css";
import { Card } from "./card";
import request from "../../links/httpp";
import search from "../images/svg/search.svg";
import { useQuery } from "react-query";
import { useState } from "react";
export const Main = () => {
  const select = {
    Region1: "Africa",
    Region2: "Americas",
    Region3: "Antarctic",
    Region4: "Asia",
    Region5: "Europe",
    Region6: "Oceania",
  };

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const getData = () => {
    return request
      .get(country ? `name/${country}` : region ? `/region/${region}` : "/all")
      .then((res) => res.data);
  };
  const query = useQuery(["country", country, region], getData);

  return (
    <div className="country__content contenier">
      <div className="country__search--wrp ">
        <form className="country__search">
          <img src={search} alt="search"></img>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="search"
            name="search"
            type="text"
            placeholder="Search for a country…"
          />
        </form>

        <select
          name="count"
          id="region"
          onChange={(e) => setRegion(e.target.value)}
        >
          {Object.values(select).map((el) => (
            <option value={el}> {el}</option>
          ))}
        </select>
      </div>
      <div className="country__cont">
        {query?.data?.map((el) => {
          return (
            <Card
              key={el.name.common}
              name={el.name.official}
              region={el.region}
              capital={el.capital}
              png={el.flags.svg}
              population={el.population}
            />
          );
        })}
      </div>
    </div>
  );
};
