const perksComponents = () => {
  // Define an array of objects representing perks
  const perksList = [
    {
      title: "Increased Long-Term ROI",
      details:
        "Optimize long-term economic growth by seamlessly integrating sustainability into your business using our tools. Reduce operational risk and align with core values for a sustainable future.",
      icon: "roi.png",
    },
    {
      title: "Enhanced Sustainable Performance",
      details:
        "Boost sustainability performance with our expert guidance. Identify environmental and social impacts, obtain certifications, and maximize initiative impact with tailored support.",
      icon: "coins.png",
    },
    {
      title: "Emerging Market Growth",
      details:
        "Elevate your international competitiveness with renowned certifications. Benchmark against peers, drive growth confidently, and succeed as you expand globally.",
      icon: "shop.png",
    },
  ];

  return (
    <div className="flex justify-center items-center  gap-5 text-navy px-5 py-10 lg:py-20 bg-opGreen w-screen">
      <div className=" max-w-screen-xl m-auto flex flex-col">
        <h1 className="text-xl uppercase lg:text-3xl text-navy font-light text-center mb-10">
          BENEFITS
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center items-center gap-5">
          {/* Map over the array to render each perk */}
          {perksList.map((perk, index) => (
            <div key={index} className="flex flex-col items-center gap-5">
              <div className="flex justify-center items-center p-2 rounded-full bg-gradient-to-b from-green to-navy">
                <div className="w-full h-full bg-opGreen rounded-full p-4 flex items-center justify-center">
                  {/* Render icon */}
                  <img
                    className="w-20 h-20 lg:w-24 lg:h-24"
                    src={`/${perk.icon}`}
                    alt={perk.title}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center text-center w-3/4 gap-2">
                {/* Render title */}
                <h4 className="font-bold lg:text-lg">{perk.title}</h4>
                {/* Render details */}
                <p className="font-light text-xs lg:text-sm">{perk.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default perksComponents;
