import { useLoaderData, useParams } from "react-router-dom";
import RightSideBar from "../../Shared/RightSideBar/RightSideBar";
import Header from "../../Shared/Header/Header";

const NewsDetails = () => {
  const news = useLoaderData();
  const { id } = useParams();

  const matchedItems = news?.find((item) => item._id == id);

  const { image_url, title, details, thumbnail_url } = matchedItems;

  console.log(matchedItems);

  return (
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <Header />
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-5 ">
        <div className="col-span-3 border space-y-3 p-3">
          <img src={image_url} alt="" />
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm">{details}</p>
        </div>
        <div>
          <RightSideBar />
        </div>
      </section>
    </div>
  );
};

export default NewsDetails;
