import facebook from "../../assets/Facebook.svg";
import twitter from "../../assets/Twitter.svg";
import instagram from "../../assets/Instagram.svg";

const FindUs = () => {
  return (
    <div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Find Us On </h2>
        <div className="flex items-center gap-3 border rounded-t-lg px-4 py-2">
          <img src={facebook} alt="" />
          <a href="">Facebook</a>
        </div>
        <div className="flex items-center gap-3 border-x px-4 py-2">
          <img src={twitter} alt="" />
          <a href="">Twitter</a>
        </div>
        <div className="flex items-center gap-3 border rounded-b-lg px-4 py-2">
          <img src={instagram} alt="" />
          <a href="">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
