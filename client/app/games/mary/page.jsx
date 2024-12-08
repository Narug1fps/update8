import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import CardsMary from "../../Components/CardsMary/CardsMary.jsx";
import SliderMary from "../../Components/SliderMary/SliderMary.jsx";
import MarySec from "@/app/Components/MarySec/MarySec.jsx";

export default function Mary() {
  return (
    <>
      <div>
        <div className="z-10 ">
          {" "}
          <Header />
          <SliderMary />
          <MarySec />
          <CardsMary />
          <div className="z-30">
            {" "}
            <Footer />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
