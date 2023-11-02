import "./header.scss";
import SearchIcon from "../../icons/Icon-left.svg";
import BellIcon from "../../icons/bell.svg";
import Profile from "../../icons/image.png";

const Header = () => {
  return (
    <div className="header">
      <div className="searchBar">
        <img src={SearchIcon} alt="" />
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="notifyProfile">
        <div className="bellIcon">
          <img src={BellIcon} alt="" />
        </div>
        <div className="profile">
          <img src={Profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
