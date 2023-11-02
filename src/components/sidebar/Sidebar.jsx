import "./sidebar.scss";
import HomeIcon from "../../icons/home.svg";
import FolderIcon from "../../icons/folder.svg";
import SavedIcon from "../../icons/bookmark.svg";
import IntegrationsIcon from "../../icons/share.svg";
import TrashIcon from "../../icons/bin.svg";
import SettingsIcon from "../../icons/settings.svg";
import SupportIcon from "../../icons/question-circle.svg";
import RocketIcon from "../../icons/rocket-alt.svg";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarTop">
        <div className="logoContainer">
          <span>abc firm</span>
        </div>
        <div className="menuItems">
          <div className="menuItem">
            <img src={HomeIcon} alt="" />
            <span>Home</span>
          </div>
          <div className="menuItem">
            <img src={FolderIcon} alt="" />
            <span>All Files</span>
          </div>
          <div className="menuItem">
            <img src={SavedIcon} alt="" />
            <span>Saved</span>
          </div>
          <div className="menuItem">
            <img src={IntegrationsIcon} alt="" />
            <span>Itegrations</span>
          </div>
          <div className="menuItem">
            <img src={TrashIcon} alt="" />
            <span>Trash</span>
          </div>
          <div className="menuItem">
            <img src={SettingsIcon} alt="" />
            <span>Settings</span>
          </div>
          <div className="menuItem">
            <img src={SupportIcon} alt="" />
            <span>Help and Support</span>
          </div>
        </div>
      </div>
      <div className="sideBarBottom">
        <img src={RocketIcon} alt="" />
        <span className="upgrade">Upgrade Account</span>
        <span className="access">Access to Unlimited Transcription</span>
        <button className="upgradeButton">Upgrade</button>
      </div>
    </div>
  );
};

export default Sidebar;
