import RightSideBar from "../../Shared/RightSideBar/RightSideBar";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import NewsFeed from "./NewsFeed";

const News = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
        <LeftSideBar />
        <div className="border border-gray-100 col-span-2">
          <h2 className="text-xl font-semibold mb-5">Dragon News Home</h2>
          <NewsFeed />
        </div>
        <RightSideBar />
      </div>
    </>
  );
};

export default News;
