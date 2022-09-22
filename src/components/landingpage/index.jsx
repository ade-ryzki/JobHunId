import styles from "../../../styles/Home.module.css";
import teamwork from "../../components/image/teamwork.png";
import Image from "next/image";

const Landing = () => {
  return (
    <div className={styles}>
      {/* <div className="flex flex-col bg-white font-['Rubik']">
        <Image className="w-full relative" src={BG} alt="" />
        <div className="absolute ml-28 text-5xl  mt-28 text-white invisible md:visible ">
          Start Your Day with <br /> Coffee and Good Meals
          <p className="mt-5 mb-7 text-xl">
            We provide high quality beans, good taste, and healthy <br /> meals
            made by love just for you.Start your day with us <br /> for a
            bigger smile!.
          </p>
          <div>
            <button className=" w-44 h-12 py-1 px-1 text-[#6A4029] font-normal text-xl hover:text-black leading-tight  rounded-md shadow-md hover:bg-[#b59047] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#FFBA33] active:shadow-lg transition duration-150 ease-in-out ">
              Get Started
            </button>
          </div>
        </div>
      </div> */}
      {/* section-2 */}
      <div className="grid grid-col-2 md:grid-flow-col font-['Rubik'] rounded-lg">
        <div className="bg-white text-center">
          <div className="my-10 text-center">
            <Image src={teamwork} alt="teamwork" />
          </div>
        </div>
        </div>
    </div>
  );
};
export default Landing;