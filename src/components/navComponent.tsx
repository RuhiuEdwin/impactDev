// NavigationBar.js
import Image from "next/image";
// Define the type of openWaitlistForm
type OpenWaitlistForm = () => void;

const navComponent = ({ openWaitlistForm }: { openWaitlistForm: OpenWaitlistForm }) => {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
      <div className="fixed flex justify-between items-center left-0 top-0 w-full border-b border-navy bg-snow p-2 lg:p-5 backdrop-blur-2xl lg:static lg:w-auto">
        <Image
          className="relative"
          src="/logo.png"
          alt="Next.js Logo"
          width={70}
          height={8}
          priority
        />
        <button onClick={openWaitlistForm} className="text-white bg-navy py-2 px-5 rounded-sm text-center font-bold">FREE TOOLBOX ACCESS</button>
      </div>
    </div>
  );
};

export default navComponent;
