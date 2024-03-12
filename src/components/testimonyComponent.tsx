const testimonyComponent = () => {
  // Define an array of objects representing testimonials
  const testimonialsList = [
    { testimonial: "We wanted to get started on our sustainability journey. ImpacTower provided us with expert guidance and tailored tools.Their team demonstrated exceptional technical skills and commitment to delivering high quality results. Their  hands-on support in developing a sustainability roadmap is commendable!", 
    image: "chris.png", name: "Chris Maara", role: "CEO", company: "Kiri EV Ltd" },
    { testimonial: "Impactower’s leadership in advocating for sustainability practices no matter the stage or size of business is commendable. Through their mentorship and guidance, they have helped our various teams to build sustainable business models, aligning their initiatives with the SDGs and drive positive social & environmental impact.", 
    image: "rhea.png", name: "Rhea Singhla", role: "CEO & Founder", company: "Fuel Africa" }
  ];

  return (
    <div className="w-full px-5 py-10 flex flex-col items-start gap-5">
      <h1 className="text-xl lg:text-2xl text-navy font-light text-center mb-5">WHAT OUR CLIENTS SAY</h1>
      {/* Map over the array to render each testimonial */}
      {testimonialsList.map((testimonial, index) => (
        <div key={index} className="flex flex-col gap-5 ">
          <div className="bg-green bg-opacity-60 px-3 py-5 rounded-xl relative">
            <p className="font-light text-center text-xs text-navy">{testimonial.testimonial}</p>
            <div className="absolute -bottom-5 left-5 w-0 h-0 
              border-l-[10px] border-l-transparent
              border-t-[20px] border-green border-opacity-60
              border-r-[10px] border-r-transparent">
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div> {/* Render image */}
              <img src={`/${testimonial.image}`} alt={testimonial.name} className="w-20 h-20 rounded-full" />
            </div>
            <div className="flex flex-col gap-1 items-start">
              {/* Render name, role, and company */}
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="font-light text-xs">{testimonial.role}</p>
              <p className="font-light text-xs">{testimonial.company}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default testimonyComponent;
