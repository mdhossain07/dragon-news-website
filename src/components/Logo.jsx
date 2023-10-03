import moment from "moment/moment";
import logo from "../../src/assets/logo.png";

const Logo = () => {
  return (
    <div className="text-center py-5 space-y-2">
      <img className="mx-auto" src={logo} alt="" />
      <h3 className="text-md font-medium text-[#706F6F]">
        Journalism without fear or favour
      </h3>
      <p className="text-lg">
        {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
};

export default Logo;
