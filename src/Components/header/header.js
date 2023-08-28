import "./header.css";
import moon from "../images/svg/moon.svg";
export const Header = () => {
  return (
    <header className="country__header">
      <div className="country__header__wrp contenier">
        <h2>Where in the world?</h2>
        <p>
          <img src={moon} alt="moon"></img>
          Dark Mode
        </p>
      </div>
    </header>
  );
};
