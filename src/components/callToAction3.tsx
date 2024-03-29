// callToAction3.js
import Image from "next/image";

// Define the type of openWaitlistForm
type OpenWaitlistForm = () => void;

const callToAction3Component = ({ openWaitlistForm }: { openWaitlistForm: OpenWaitlistForm }) => {
  return (
    <div className="relative h-[300px]  lg:h-[200px]  w-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green to-navy opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative w-10/12 m-auto lg:max-w-screen-md  z-1 flex flex-col gap-2 justify-center items-center h-full text-snow p-5 text-center">
        <h1 className="text-xl capitalize lg:text-3xl font-bold text-center lg:mb-3 mb-8">
          Let us help you achieve your Sustainability Goals with Confidence and
          Impact.
        </h1>
        <button
          onClick={openWaitlistForm}
          className="text-snow text-sm lg:text-lg  bg-darkGreen py-2 px-5 w-4/5 lg:w-1/2 mt-4 drop-shadow-2xl rounded-sm text-center font-bold hover:bg-darkGreen"
        >
          FREE IMPACT TOOLBOX ACCESS
        </button>
      </div>
    </div>
  );
};

export default callToAction3Component;
