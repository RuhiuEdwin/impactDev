// features.js
// Define an array of objects representing icon-perk pairs
const featuresList = [
  {
    icon: "info.png",
    perk: "Identify opportunities for improvement and outline your sustainability roadmap",
  },
  {
    icon: "change.png",
    perk: "Transform your operations through our user-friendly, customizable tools",
  },
  {
    icon: "measure.png",
    perk: "Benchmark with peers with guidance to adopt the certificates that matter!",
  },
];

const featuresComponent = () => {
  return (
    <div className=" text-navy px-5 py-5 lg:py-10 bg-green bg-opacity-30 w-screen">
      <div className="m-auto lg:w-1/2 flex flex-col gap-5">
        <h1 className="text-lg lg:text-2xl font-bold text-center mb-5">
          <span className="text-olive">Optimize, Innovate, Certify:</span> A
          Holistic Approach to Sustainable Business Growth
        </h1>
        <div className="flex flex-col gap-3 lg:gap-0 items-start">
          {/* Map over the array to render each icon-perk pair */}
          {featuresList.map((feature, index) => (
            <div key={index} className="flex items-start lg:items-center justify-center gap-2">
              <div>
                {/* Render icon */}
                <img
                  className="w-20 lg:w-12 h-auto"
                  src={`/${feature.icon}`}
                  alt={feature.perk}
                />
              </div>
              <p className="font-light text-sm">
                {/* Render perk */}
                {feature.perk}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default featuresComponent;
