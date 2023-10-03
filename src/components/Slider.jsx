import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="flex items-center bg-[#F3F3F3] py-2">
      <div>
        <button
          style={{
            backgroundColor: "#D72050",
            color: "white",
            padding: "9px 24px",
            fontSize: "18px",
            marginLeft: "10px",
          }}
        >
          Latest
        </button>
      </div>
      <Marquee className="text-lg font-semibold" speed={100}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default Slider;
