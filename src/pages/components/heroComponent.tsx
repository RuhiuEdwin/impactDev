import Image from "next/image";

// Define the type of openWaitlistForm
type OpenWaitlistForm = () => void;

const heroComponent = ({
  openWaitlistForm,
}: {
  openWaitlistForm: OpenWaitlistForm;
}) => {
  return (
    <div className="w-screen relative h-[570px] lg:h-[650px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpeg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-snow opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-1 h-full p-2 w-full flex flex-col justify-center max-w-screen-xl m-auto">
        <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start text-navy  h-full lg:w-2/4 ">
          <h1 className="capitalize text-lg lg:text-4xl font-bold mb-8">
            <span className="text-darkGreen lg:text-6xl">
              Maximize Your Business Impact
            </span>
            <br></br>Achieve Sustainable Growth with Actionable Tools
          </h1>
          <p className="text-sm capitalize lg:text-base">
            Empower Your Sustainability journey with actionable toolkits for ESG
            compliance & SDG Achievement
          </p>
          <button
            onClick={openWaitlistForm}
            className="text-snow text-sm lg:text-lg  bg-darkGreen py-2 px-5 w-4/5 lg:w-2/3 mt-4 drop-shadow-2xl rounded-sm text-center font-bold hover:bg-darkGreen"
          >
            FREE IMPACT TOOLBOX ACCESS
          </button>
        </div>
      </div>
    </div>
  );
};

export default heroComponent;
