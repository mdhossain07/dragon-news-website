import Header from "../Shared/Header/Header";
import News from "../components/News/News";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24">
      <Header />
      <News />
    </div>
  );
};

export default Home;
