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
    <div className="  px-5 py-5 lg:py-10 bg-white w-screen">
      <div className="m-auto max-w-screen-xl flex flex-col gap-5 items-center justify-center">
        <h1 className="text-lg text-navy capitalize lg:w-1/2 lg:text-2xl font-bold text-center">
          Discover curated toolkits for your sustainable growth aligned with
          environmental & social goals!
        </h1>
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
        <div className="flex lg:relative lg:w-4/5 flex-col lg:flex-row gap-5 items-center justify-center lg:items-end bg-darkGreen rounded-lg p-2 pb-5 pt-5 lg:p-5 lg:pl-84 mt-20">
          <div className="bg-white lg:absolute lg:bottom-5 lg:left-5 rounded-lg p-5 w-11/12 lg:w-2/5 drop-shadow-xl">
            <img className="w-full h-auto" src="/image.png" />
          </div>
          <div className="hidden lg:flex bg-darkGreen w-11/12 lg:w-2/5 "></div>
          <div className="flex text-sm lg:text-base flex-col gap-5 text-snow mt-5  w-11/12 lg:w-1/2">
            <p className="font-light lg:font-normal  text-center lg:text-left">
              In today's global marketplace, sustainability isn't just an option
              <br></br>— it's a necessity for long-term success.
            </p>
            <p className="font-light lg:font-normal lg:float-right  text-center lg:text-left">
              <span className="font-bold">ImpacTower</span> offer a
              comprehensive suite of resources to help you adopt, align and
              accelerate your impact, whether you're a{" "}
              <span className="font-bold">
                social entrepreneur, corporate sustainability professional
              </span>{" "}
              or <span className="font-bold">impact enthusiast</span>. Our{" "}
              <span className="font-bold">Toolbox of Impact</span> provides the{" "}
              <span className="font-bold">
                essential and actionable toolkits
              </span>{" "}
              you need on your journey towards sustainability, tailored to fit
              businesses of any size or stage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default featuresComponent;
