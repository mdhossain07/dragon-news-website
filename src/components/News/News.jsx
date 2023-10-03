import RightSideBar from "../../Shared/RightSideBar/RightSideBar";
import LeftSideBar from "../LeftSideBar/LeftSideBar";

const News = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
        <LeftSideBar />
        <div className="border border-black col-span-2">
          <h2>News Feed</h2>
        </div>
        <RightSideBar />
      </div>
    </>
  );
};

export default News;
