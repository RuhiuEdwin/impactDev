// callToAction2.js
import Image from "next/image";

const callToAction2Component = () => {
  return (
    <div className="relative h-[200px] w-screen">
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
      <div className="relative w-10/12 m-auto lg:max-w-screen-md  z-1 flex flex-col gap-2 justify-center items-center h-full text-snow p-5 text-center">
        <h1 className="text-xl lg:text-3xl font-bold text-center mb-8">
          Empower Your Organization for Sustainable Success and Impact.
        </h1>
      </div>
    </div>
  );
};

export default callToAction2Component;
