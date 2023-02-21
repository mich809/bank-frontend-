import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import crypto from "../assets/Image_part_001.png";
function MainPage() {
  return (
    <>
      <div className="h-screen flex flex-col mx-16 mt-20   md:my-4  space-y-10 md:space-y-0    ">
        <h1 className="text-white font-extrabold  text-2xl text-center md:text-left md:text-9xl ">
          FINANCIAL HEROES.
        </h1>
        <FontAwesomeIcon
          icon={faStarOfLife}
          className="text-8xl  text-[#ed732b]  md:w-1/4 md:ml-auto md:mr-4"
        />
        <p className="text-white  text-lg text-center md:text-xl md:w-1/2 md:ml-auto ">
          We can help you grow with dignity, a customer-focused bank that
          provides complete financial solutions.
        </p>
        <div className="w-full md:w-1/2 h-28 relative rounded-full bg-orangeWavey mx-auto md:m-0 flex ">
          <img
            src={crypto}
            alt=""
            className="absolute -top-[1.20rem] md:-top-[8.63rem] md:right-[9rem] object-contain "
          />
          <div className="w-1/2 h-10 md:w-1/4 md:h-16 bg-black rounded-full flex justify-center items-center absolute right-[3.8rem] md:right-10 -top-1 md:top-7">
            <p className="text-white font-bold">PICK HEROES</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
