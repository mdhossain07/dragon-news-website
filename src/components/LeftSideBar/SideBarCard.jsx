import moment from "moment";
import cardImg1 from "../../assets/1.png";
import cardImg2 from "../../assets/2.png";
import cardImg3 from "../../assets/3.png";
import frame from "../../assets/Frame.svg";

const SideBarCard = () => {
  return (
    <div>
      <div className="space-y-2 mb-5">
        <img src={cardImg1} alt="" />
        <h2 className="text-[#403F3F] tex-xl font-semibold">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex items-center gap-4">
          <p className="text-md font-medium">Sports</p>
          <div className="flex items-center gap-1">
            <img src={frame} alt="" />
            <p>{moment().format("MMM, D, YYYY")}</p>
          </div>
        </div>
      </div>
      <div className="space-y-2 mb-5">
        <img src={cardImg2} alt="" />
        <h2 className="text-[#403F3F] tex-xl font-semibold">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex items-center gap-4">
          <p className="text-md font-medium">Sports</p>
          <div className="flex items-center gap-1">
            <img src={frame} alt="" />
            <p>{moment().format("MMM, D, YYYY")}</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <img src={cardImg3} alt="" />
        <h2 className="text-[#403F3F] tex-xl font-semibold">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex items-center gap-4">
          <p className="text-md font-medium">Sports</p>
          <div className="flex items-center gap-1">
            <img src={frame} alt="" />
            <p>{moment().format("MMM, D, YYYY")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarCard;
