import stl from "./infostyle.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import request from "../../../links/httpp";
import back from "../../images/svg/bach.svg";
import { useQuery } from "react-query";
export function Infocard() {
  const navigate = useNavigate();
  const { capital } = useParams();

  const [border, setBorder] = useState([]);
  const getDataByCapital = () => {
    return request.get(`/capital/${capital}`).then((res) => res.data);
  };
  const { data = [], isLoading } = useQuery(
    ["GET/COUNTRY"],
    getDataByCapital,
    capital
  );

  const handleBorder = (data) => {
    return border.filter((el) => el.cca3 === data);
  };

  return !isLoading ? (
    <section className={stl.card__info}>
      <div className={stl.contenier}>
        <button className={stl.back_button} onClick={() => navigate("/home")}>
          <img width={20} height={20} src={back} alt="back" /> back
        </button>
        {
          <div className={stl.card__info__content}>
            <div className={stl.card__info__content_img}>
              <img src={data[0]?.flags?.svg} alt="flag" />
            </div>
            <div className={stl.card_info__content_data}>
              <div className={stl.main__content}>
                <ul>
                  <li>
                    <h2>{data[0]?.name.official}</h2>
                  </li>
                  <li>
                    Native Name: <span>{data[0]?.name.common}</span>
                  </li>
                  <li>
                    Population:{" "}
                    <span>{data[0]?.population.toLocaleString()}</span>
                  </li>
                  <li>
                    Region: <span> {data[0]?.region}</span>
                  </li>
                  <li>
                    Capital: <span> {data[0]?.capital}</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    Top Level Domain: <span>.be</span>
                  </li>
                  <li>
                    Currencies:{" "}
                    <span>
                      {
                        data[0]?.currencies[
                          `${Object.keys(data[0]?.currencies)}`
                        ]?.name
                      }
                    </span>
                  </li>
                  <li>
                    Languages:
                    <span>
                      {" "}
                      {
                        data[0]?.languages[
                          `${Object.keys(data[0]?.languages)[0]}`
                        ]
                      }
                    </span>
                  </li>
                </ul>
              </div>
              <div className={stl.button}>
                <p className={stl.button__p}> Border Countries: </p>
                {data[0]?.borders?.map((el) => (
                  <Link className={stl.links} to={handleBorder(el).capital}>
                    {el}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  ) : (
    <h1>Loading .....</h1>
  );
}
