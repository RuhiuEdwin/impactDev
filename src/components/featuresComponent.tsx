// features.js
  // Define an array of objects representing icon-perk pairs
  const featuresList = [
    { icon: "info.png", perk: "Identify opportunities for improvement and outline your sustainability roadmap" },
    { icon: "change.png", perk: "Transform your operations through our user-friendly, customizable tools" },
    { icon: "measure.png", perk: "Benchmark with peers with guidance to adopt the certificates that matter!" },
  ];

const featuresComponent = () => {
  return (
    <div className="flex flex-col gap-5 text-navy px-5 py-5 bg-green bg-opacity-30">
        <h1 className="text-lg lg:text-2xl font-bold text-center mb-5"><span className="text-olive">Optimize, Innovate, Certify:</span> A Holistic Approach to Sustainable Business Growth</h1>
      <div className="flex flex-col gap-3 items-start">
        {/* Map over the array to render each icon-perk pair */}
        {featuresList.map((feature, index) => (
          <div key={index} className="flex items-start justify-center gap-2">
            <div>
              {/* Render icon */}
              <img className="w-20 h-auto" src={`/${feature.icon}`} alt={feature.perk} />
            </div>
            <p className="font-light text-sm">
              {/* Render perk */}
              {feature.perk}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default featuresComponent;
