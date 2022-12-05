import "../Header/Header.css";
import moon from "../../images/light.png";
import sun from "../../images/dark.png";

function Header({ daynight, toggleDay }) {
  return (
    <div className="header">
      <h1 className="todo">TODO</h1>
      <img src={daynight ? sun : moon} className="toggle" onClick={toggleDay} />
    </div>
  );
}

export default Header;
