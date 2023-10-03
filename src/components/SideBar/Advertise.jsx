import advertise from "../../assets/bg.png";

const Advertise = () => {
  return (
    <>
      <div className="mt-8 relative">
        <img className="" src={advertise} alt="" />
        <div className="absolute top-0 m-8 text-[white] text-center space-y-5">
          <h2 className="text-3xl font-bold mt-10">
            Create an Amazing Newspaper
          </h2>
          <p className="text-md">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="btn btn-error">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default Advertise;
