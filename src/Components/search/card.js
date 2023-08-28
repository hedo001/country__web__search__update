import "./style.css";
import { Link } from "react-router-dom";
export const Card = ({ region, name, png, capital, population }) => {
  return (
    <div className="country__card">
      <Link className="link" to={`${capital}`}>
        <div className="img">
          <img src={png} />
        </div>
        <div className="content">
          <h2>{name}</h2>
          <p>Population: {population.toLocaleString()}</p>
          <p> Region: {region}</p>
          <p> Capital: {capital}</p>
        </div>
      </Link>
    </div>
  );
};
