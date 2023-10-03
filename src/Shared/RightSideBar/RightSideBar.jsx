import Advertise from "../../components/SideBar/Advertise";
import FindUs from "../../components/SideBar/FindUs";
import LoginWith from "../../components/SideBar/LoginWith";
import QZone from "../../components/SideBar/QZone";

const RightSideBar = () => {
  return (
    <div className="p-3">
      <LoginWith />
      <FindUs />
      <QZone />
      <Advertise />
    </div>
  );
};

export default RightSideBar;
