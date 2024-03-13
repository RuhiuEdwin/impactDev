import Image from "next/image";

// Define the type of openWaitlistForm
type OpenWaitlistForm = () => void;

const heroComponent = ({
  openWaitlistForm,
}: {
  openWaitlistForm: OpenWaitlistForm;
}) => {
  return (
    <div className="w-screen relative h-[450px] lg:h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/1.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-navy opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-1 flex flex-col gap-2 justify-center items-center h-full text-snow p-2 text-center lg:w-1/2 lg:m-auto">
        <h1 className="text-lg lg:text-4xl font-bold text-center mb-8">
          Elevate Your Business <br></br>
          <span className="text-olive">Sustainable Growth & Impact</span>
          <br></br>with Practical Tools
        </h1>
        <p className="font-light text-sm lg:text-base">
          Find Simple, Affordable Sustainable Solutions for Your Business
          <br></br>Without Sacrificing Quality or Ethics!
        </p>
        <button
          onClick={openWaitlistForm}
          className="text-snow bg-navy py-2 px-5 rounded-sm text-center font-bold hover:bg-darkGreen"
        >
          FREE TOOLBOX ACCESS
        </button>
      </div>
    </div>
  );
};

export default heroComponent;
