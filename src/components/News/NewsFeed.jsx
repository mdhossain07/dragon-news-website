import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const NewsFeed = () => {
  const [newsFeed, setNewsFeed] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNewsFeed(data));
  }, []);

  return (
    <div>
      {newsFeed.slice(0, 2).map((news) => (
        <NewsCard key={news.id} news={news}></NewsCard>
      ))}
      <div className="flex justify-center">
        <button className="btn btn-neutral">See More </button>
      </div>
    </div>
  );
};

export default NewsFeed;
