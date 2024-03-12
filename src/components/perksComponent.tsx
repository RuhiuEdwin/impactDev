const perksComponents = () => {
  // Define an array of objects representing perks
  const perksList = [
    { title: "Increased Long-Term ROI", 
    details: "Our tools  empower you to align goals with your organizational values, seamlessly  embedding sustainability into the business ,reducing operational risk and contributing to long-term economic benefits.", 
    icon: "roi.png" },
    { title: "Enhanced Sustainability Performance", 
    details: "Our team of experts will guide you to elevate your sustainability performance by effectively identifying environmental and social impacts, attain required certifications, and maximize the impact of your initiatives.", 
    icon: "coins.png" },
    { title: "Emerging Growth & Market Access", 
    details: "Access to reputable certifications will ensure you benchmark with peers , enhancing your competitive advantage  ultimately driving growth & success in the international marketplace, confidently accessing global markets", 
    icon: "shop.png" },
  ];

  return (
    <div className="flex flex-col gap-5 text-navy px-5 py-10 bg-green bg-opacity-30">
      {/* Map over the array to render each perk */}
      {perksList.map((perk, index) => (
        <div key={index} className="flex flex-col items-center gap-5">
          <div className="flex justify-center items-center p-3 rounded-full bg-none border-4 border-olive">
            {/* Render icon */}
            <img className="w-20 h-20" src={`/${perk.icon}`} alt={perk.title} />
          </div>

          <div className="flex flex-col items-center text-center w-3/4 gap-2">
            {/* Render title */}
            <h4 className="font-bold">{perk.title}</h4>
            {/* Render details */}
            <p className="font-light text-xs">{perk.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default perksComponents;
