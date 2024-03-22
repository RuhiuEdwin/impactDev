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
    <div className=" text-navy px-5 py-5 lg:py-10 bg-opGreen w-screen">
      <div className="m-auto max-w-screen-xl flex flex-col gap-5 items-center justify-center">
        <h1 className="text-lg lg:w-1/2 lg:text-2xl font-bold text-center">
          Discover curated emerging Tools & Resources for Impact & Sustainable
          Growth !
        </h1>
        <p className="font-light lg:w-1/2 text-sm lg:text-base text-center">
          In today's global marketplace, sustainability isn't just an option —
          it's a necessity for long-term success.
        </p>
        {/* <div className="flex flex-col gap-3 lg:gap-0 items-start"> */}
        {/* Map over the array to render each icon-perk pair */}
        {/* {featuresList.map((feature, index) => (
            <div
              key={index}
              className="flex items-start lg:items-center justify-center gap-2"
            >
              <div>
                {/* Render icon */}
        {/* <img
                  className="w-20 lg:w-12 h-auto"
                  src={`/${feature.icon}`}
                  alt={feature.perk}
                />
              </div> */}
        {/* <p className="font-light text-sm"> */}
        {/* Render perk */}
        {/* {feature.perk} */}
        {/* </p> */}
        {/* </div> */}
        {/* ))} */}
        {/* </div> */}
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center lg:items-start">
          <img className="w-11/12 lg:w-1/2 h-auto" src="/image.jpg" />
          <p className="font-light text-sm lg:text-base mt-5 text-center lg:text-left">
            ImpacTower serves as a one-stop resource hub for organizations
            committed to creating positive change in the world. Whether you're a{" "}
            <span className="font-bold">
              social entrepreneur, corporate sustainability professional
            </span>
            , or passionate mission-driven individual, the{" "}
            <span className="font-bold">
              Toolbox of Impact resources and tools
            </span>{" "}
            support your sustainability journey no matter your size or stage
          </p>
        </div>
      </div>
    </div>
  );
};

export default featuresComponent;
