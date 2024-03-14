// callToAction2.js
import Image from "next/image";

const callToAction2Component = () => {
  return (
    <div className="relative h-[200px]  lg:h-[150px] w-screen">
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
      <div className="relative w-10/12 m-auto lg:max-w-screen-md  z-1 flex justify-center items-center h-full text-snow p-5 text-center">
        <h1 className="text-xl lg:text-3xl font-bold text-center">
          Empower Your Organization for Sustainable Success and Impact.
        </h1>
      </div>
    </div>
  );
};

export default callToAction2Component;
