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
          <span className="text-darkGreen">
            Maximize Your Business's Impact:
          </span>
          <br></br>Achieve Sustainable Growth with Actionable Tools
        </h1>
        <p className="text-sm lg:text-base">
          Find Simple, Actionable Tools & Resources for Embedding Sustainability
          & Impact to your business
        </p>
        <button
          onClick={openWaitlistForm}
          className="text-snow text-sm lg:text-base  bg-navy py-2 w-4/5 lg:w-1/2 mt-4 drop-shadow-2xl rounded-sm text-center font-bold hover:bg-darkGreen"
        >
          FREE IMPACT TOOLBOX ACCESS
        </button>
      </div>
    </div>
  );
};

export default heroComponent;
