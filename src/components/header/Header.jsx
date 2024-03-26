import headerStyle from "./Header.module.scss";
import nba from "../../img/nba-logo.png";

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <img src={nba} alt="" />
      <h1>NBA Legends</h1>
    </header>
  );
};

export default Header;
