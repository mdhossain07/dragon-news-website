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
      {newsFeed.slice(0, 3).map((news) => (
        <NewsCard key={news.id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default NewsFeed;
