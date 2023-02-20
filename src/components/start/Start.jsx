import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

const Start = () => {
  const { activeUser, setActiveUser, changeMode } = useContext(GameContext);

  return (
    <div className="start">
      <div className="start_header">
        <Xicon />
        <Oicon />
      </div>
      <div className="card shadow-gray">
        <h1 className="text-lg">pick player 1's mark</h1>
        <div className="start_players">
          <span 
          onClick={() => setActiveUser("x")}
          className={activeUser === "x" ? "start_players--active" : ""}>
            <Xicon color={activeUser === "x" ? "dark" : 'light'} />
          </span>
          <span 
          onClick={() => setActiveUser("o")}
          className={activeUser === "o" ? "start_players--active" : ""}>
            <Oicon color={activeUser === "o" ? "dark" : 'light'} />
          </span>
        </div>
        <p className="text-light">remember: x goes first</p>
      </div>
      <div className="start_btns">
        <button className="btn btn--secondary" onClick={() => changeMode('cpu')}>new game (vs cpu)</button>
        <button className="btn btn--primary" onClick={() => changeMode('multi')}>new game (vs player)</button>
      </div>
    </div>
  );
}

export default Start