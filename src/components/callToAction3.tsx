// callToAction3.js
import Image from "next/image";

// Define the type of openWaitlistForm
type OpenWaitlistForm = () => void;

const callToAction3Component = ({ openWaitlistForm }: { openWaitlistForm: OpenWaitlistForm }) => {
  return (
    <div className="relative h-[200px] lg:h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-darkGreen opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-1 flex flex-col gap-2 justify-center items-center h-full text-snow p-5 text-center">
        <h1 className="text-xl lg:text-2xl font-bold text-center mb-8">Let us help you achieve your Sustainability Goals with Confidence and Impact.</h1>
        <button onClick={openWaitlistForm}  className="text-snow bg-navy py-2 px-5 rounded-sm text-center font-bold">FREE TOOLBOX ACCESS</button>
      </div>
    </div>
  );
};

export default callToAction3Component;
