import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const NewsFeed = () => {
  const [newsFeed, setNewsFeed] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNewsFeed(data));
  }, []);
  console.log(seeMore);
  return (
    <>
      {seeMore ? (
        <div>
          {newsFeed?.map((news) => (
            <NewsCard key={news.id} news={news}></NewsCard>
          ))}
        </div>
      ) : (
        <div>
          {newsFeed.slice(0, 3)?.map((news) => (
            <NewsCard key={news.id} news={news}></NewsCard>
          ))}
        </div>
      )}

      <div className="flex justify-center">
        <button
          onClick={() => setSeeMore(!seeMore)}
          className="btn btn-neutral"
        >
          {seeMore ? "See Less" : "See More"}
        </button>
      </div>
    </>
  );
};

export default NewsFeed;
