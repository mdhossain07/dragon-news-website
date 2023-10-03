/* eslint-disable react/prop-types */
import bookmark from "../../assets/Bookmark.svg";
import share from "../../assets/Share.svg";
import view from "../../assets/Views.svg";

const NewsCard = ({ news }) => {
  const { author, title, thumbnail_url, details, rating, total_view } = news;
  console.log(news);
  return (
    <div className="mb-16">
      {/* Author Profile */}
      <section className="bg-[#F3F3F3] flex justify-between px-5 py-2 mb-3">
        <div className="flex gap-4">
          <div>
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={author.img}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-[#706F6F] text-xs">
              {author.published_date.split(" ")[0]}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <img src={bookmark} alt="" />
          <img src={share} alt="" />
        </div>
      </section>

      {/* News Details */}
      <section className="space-y-4 px-5">
        <h2 className="text-xl font-bold">{title}</h2>
        <img
          className="w-[500px] h-[300px] mx-auto"
          src={thumbnail_url}
          alt=""
        />
        <p className="text-sm text-[#706F6F]">{details.slice(0, 300)}</p>
        <span>
          <a className="text-[#FF8C47] text-base font-semibold" href="">
            Read more...
          </a>
        </span>
      </section>

      {/* News Views & Ratings*/}
      <section>
        <div className="flex justify-between px-4 mt-5">
          <div className="flex items-center gap-3">
            <div className="rating text-sm">
              <input
                type="radio"
                name={rating.number}
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-[#706F6F] text-sm font-medium">
              {rating.number}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src={view} alt="" />
            <p className="text-[#706F6F] font-medium text-sm">{total_view}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsCard;
