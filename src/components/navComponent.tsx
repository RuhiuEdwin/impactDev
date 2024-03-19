// NavigationBar.js
import Image from "next/image";
// Define the type of openWaitlistForm
type OpenWaitlistForm = () => void;

const navComponent = ({ openWaitlistForm }: { openWaitlistForm: OpenWaitlistForm }) => {
  return (
    <div className="z-10 bg-opGreen w-screen fixed top-0 backdrop-blur-2xl drop-shadow-2xl">
      <div className=" flex justify-between items-center  w-full max-w-screen-xl p-2 lg:m-auto">
        <Image
          className="relative"
          src="/logo.png"
          alt="Next.js Logo"
          width={70}
          height={8}
          priority
        />
        <button
          onClick={openWaitlistForm}
          className="text-white bg-navy py-2 px-5 rounded-sm text-xs lg:text-base text-center font-bold hover:bg-darkGreen drop-shadow-2xl"
        >
          FREE IMPACT TOOLBOX ACCESS
        </button>
      </div>
    </div>
  );
};

export default navComponent;
