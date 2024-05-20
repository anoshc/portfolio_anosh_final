import Anosh from "@/public/anosh.jpg";
import Image from "next/image";

export const LandingHeader = () => {
  return (
    <header>
      <div>
        <Image src={Anosh} alt="picture of me" className="pt-44" />
        <div className="absolute top-36">
          <h1 className="text-grey-darker font-bold pl-5">
            I am Anosh, a Front-End{" "}
            <span className="text-ivory-lighter">developer</span>
          </h1>
        </div>
        <hr className="w-48 ml-5 mt-4 border-grey-darker border-4" />
        <p className="px-5 py-5 text-xl">
          As an frontend developer with a passion for creating visually stunning
          and user-friendly websites, I am excited about the opportunity to
          contribute my skills and expertise to your team.
        </p>
        <button className="bg-grey-darker text-background py-3 mb-20 px-4 uppercase ml-5 text-lg font-medium">
          Get in touch
        </button>
      </div>
    </header>
  );
};
