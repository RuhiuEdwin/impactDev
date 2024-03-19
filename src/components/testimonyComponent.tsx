const testimonyComponent = () => {
  // Define an array of objects representing testimonials
  const testimonialsList = [
    {
      testimonial:
        "We wanted to get started on our sustainability journey. ImpacTower provided us with expert guidance and tailored tools.Their team demonstrated exceptional technical skills and commitment to delivering high quality results. Their  hands-on support in developing a sustainability roadmap is commendable!",
      image: "chris.png",
      name: "Chris Maara",
      role: "CEO",
      company: "Kiri EV Ltd",
    },
    {
      testimonial:
        "Impactower’s leadership in advocating for sustainability practices no matter the stage or size of business is commendable. Through their mentorship and guidance, they have helped our various teams to build sustainable business models, aligning their initiatives with the SDGs and drive positive social & environmental impact.",
      image: "rhea.png",
      name: "Rhea Singhla",
      role: "CEO & Founder",
      company: "Fuel Africa",
    },
  ];

  return (
    <div className="w-full px-5 py-10 lg:py-20 flex flex-col items-start gap-5">
      <div className=" max-w-screen-xl m-auto flex flex-col ga-5 items-start">
        <h1 className="text-xl uppercase lg:text-3xl text-navy font-light text-center mb-10">
          Dont Just Take Our Word For It!
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between items-center gap-5 lg:gap-20 max-w-screen-lg m-auto">
          {/* Map over the array to render each testimonial */}
          {testimonialsList.map((testimonial, index) => {
            const isEven = (index + 1) % 2 === 0;
            const positionClasses = isEven
              ? "absolute -bottom-5 right-5"
              : "absolute -bottom-5 left-5";
            const flexClasses = isEven
              ? "flex-col items-end"
              : "flex-col items-start";
            const reverse = isEven ? "flex-row-reverse" : "flex";
            const border = isEven
              ? "lg:border-l lg:from-darkGreen lg:to-navy lg:border-gradient-to-b"
              : "";

            return (
              <div
                key={index}
                className={`flex flex-col gap-14 ${flexClasses} ${border}`}
              >
                <div
                  className={`bg-opGreen px-3 py-5 lg:p-8 rounded-xl lg:rounded-2xl relative drop-shadow-2xl lg:w-11/12 ${positionClasses}`}
                >
                  <p className="font-light text-center text-xs lg:text-sm  text-navy">
                    {testimonial.testimonial}
                  </p>
                  <div
                    className={`absolute w-0 h-0 
            border-l-[10px] border-l-transparent
            border-t-[20px] border-opGreen 
            border-r-[10px] border-r-transparent ${positionClasses}`}
                  ></div>
                </div>
                <div
                  className={`flex items-start lg:items-center gap-2 ${reverse}`}
                >
                  <div>
                    {/* Render image */}
                    <img
                      src={`/${testimonial.image}`}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start">
                    {/* Render name, role, and company */}
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="font-light text-xs">{testimonial.role}</p>
                    <p className="font-light text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default testimonyComponent;
