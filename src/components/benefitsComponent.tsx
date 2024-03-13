const benefitsComponents = () => {
  // Define an array of objects representing benefits
  const benefitsList = [
    {
      title: "One-Stop-Shop",
      details:
        "Our holistic approach and endorsed framework to Optimize, Innovate and Certify empowers  all businesses no matter their size or stage of their sustainability journey fueling sustainable business growth",
      icon: "shop2.png",
    },
    {
      title: "Actionable Toolkits",
      details:
        "We simplify the integration of sustainability into your organization with practical tools ensuring a seamless integration of sustainability into core strategies, saving precious time & resources",
      icon: "toolkit.png",
    },
    {
      title: "Effortless Certification",
      details:
        "We streamline the certification process, providing customised guidance to select and implement the most reputable certificates, saving you time and ultimately increasing your impact.",
      icon: "cert.png",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-5 text-navy px-5 py-10 lg:py-20  lg:py-20 bg-green bg-opacity-30 w-screen">
      <div className=" max-w-screen-xl m-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-center items-center gap-5">
          {/* Map over the array to render each perk */}
          {benefitsList.map((perk, index) => (
            <div key={index} className="flex flex-col items-center gap-5">
              <div className="flex justify-center items-center p-3 lg:p-5 rounded-full bg-none border-4 border-olive">
                {/* Render icon */}
                <img
                  className="w-20 h-20 lg:w-24 lg:h-24"
                  src={`/${perk.icon}`}
                  alt={perk.title}
                />
              </div>

              <div className="flex flex-col items-center text-center w-3/4 gap-2">
                {/* Render title */}
                <h4 className="font-bold  lg:text-lg">{perk.title}</h4>
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

export default benefitsComponents;
