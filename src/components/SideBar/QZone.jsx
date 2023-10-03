import img1 from "../../assets/qZone1.png";
import img2 from "../../assets/qZone2.png";
import img3 from "../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="mt-8 bg-[#F3F3F3] p-2">
      <h2 className="text-xl font-semibold ml-3 mt-3">Q Zone </h2>
      <img className="mx-auto" src={img1} alt="" />
      <img className="mx-auto" src={img2} alt="" />
      <img className="mx-auto" src={img3} alt="" />
    </div>
  );
};

export default QZone;
