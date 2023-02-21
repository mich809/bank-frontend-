import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import safeBox from "../assets/safe-box.png";
import digital from "../assets/digital.png";
import unified from "../assets/unified.png";
import automatic from "../assets/automatic.png";
function Features() {
  return (
    <>
      {" "}
      <div className="h-screen  flex flex-col items-center ">
        <p className="text-white font-extrabold md:text-8xl w-[44rem] text-center ">
          LEARN ABOUT OUR POWERS
        </p>
        <div className="grid grid-rows-2 grid-cols-2 gap-4 md:w-10/12 md:mt-4 h-full ">
          <div className="bg-[#ed732b]  rounded-3xl flex flex-col items-center justify-center h-[20rem]">
            <img src={unified} alt="" />
            <p className="text-white font-semibold text-2xl">
              Unified Payment System
            </p>
          </div>
          <div className="bg-[#85ed2b]  rounded-3xl flex flex-col items-center justify-center h-[20rem]">
            <img src={automatic} alt="" />
            <p className="text-white font-semibold text-2xl">
              Automatic Bill Payments
            </p>
          </div>
          <div className="bg-[#85ed2b] mt-6  rounded-3xl flex flex-col items-center justify-center h-[20rem]">
            <img src={safeBox} alt="" />
            <p className="text-white font-semibold text-2xl">
              Secured Online Banking
            </p>
          </div>
          <div className="bg-[#85ed2b] mt-6  rounded-3xl flex flex-col items-center justify-center h-[20rem]">
            <img src={digital} alt="" className="" />
            <p className="text-white font-semibold text-2xl">
              Dedicated Digital Wallet
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
