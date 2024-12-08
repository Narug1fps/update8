import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Slider from "../Components/Slider/Slider.jsx";
import Cards from "../Components/Cards/Cards.jsx";
import CardNews from "../Components/CardNews/CardNews.jsx";

export default function Home() {
  return (
    <>
      <div className="body bg-black">
        <div className="">
          <div className="z-10 ">
            {" "}
            <Header />{" "}
          </div>
          <div className="z-20 ">
            {" "}
            <Slider />{" "}
          </div>
          <CardNews />
          <div className=" z-0 mt-12">
            <Cards />
          </div>
          <div className="z-30">
            {" "}
            <Footer />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
