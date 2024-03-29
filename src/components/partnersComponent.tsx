import React, { useEffect, useRef } from "react";

const PartnersComponent = () => {
  const logos = [
    "B-FOR-GOOD-LEADERS.png",
    "B-Lab.png",
    "EQULS-EU.png",
    "Futurize.png",
    "sdg.png",
    "kenyatta-university.png",
    "merge.png",
    "ONE-TECH.png",
    "Givewatts.png",
    "Kiri-Logo.png",
    "Metap.png",
  ];

  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logosContainer = logosRef.current;
    if (!logosContainer) return;

    const logosWidth = logosContainer.scrollWidth;
    const animationDuration = logosWidth / 1; // Adjust speed of sliding here

    const slideLogos = () => {
      if (!logosContainer) return;

      // Move the first logo to the end of the container
      const firstLogo = logosContainer.firstElementChild;
      if (firstLogo) {
        logosContainer.appendChild(firstLogo.cloneNode(true));
        logosContainer.removeChild(firstLogo);
      }
    };

    const intervalId = setInterval(slideLogos, animationDuration);

    // Stop sliding when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white p-5 w-screen">
      <div className="max-w-screen-xl m-auto">
        <h1 className="text-lg capitalize lg:text-2xl text-navy font-light text-center ">
          Some of The Companies that Trust Us
        </h1>
        <div
          ref={logosRef}
          className="flex items-center overflow-hidden max-w-screen-lg m-auto"
          style={{
            scrollBehavior: "smooth",
            whiteSpace: "nowrap",
            transition: "transform 5s ease-in-out",
          }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/partners/${logo}`}
              alt={`Logo ${index + 1}`}
              className="inline-block mx-4 w-32 h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersComponent;
