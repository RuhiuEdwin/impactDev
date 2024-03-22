// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const partnersComponent = () => {
  const logos = [
    "B-FOR-GOOD-LEADERS.png",
    "B-Lab.png",
    "EQULS-EU.png",
    "Futurize.png",
    "GIvewatts.png",
    "kenyatta-university.png",
    "Kiri-Logo.png",
    "merge.png",
    "Metap.png",
    "ONE-TECH.png",
  ];

  return (
    <div className="bg-snow px-5 py-10 border-olive border border-opacity-70 w-screen">
      <div className="max-w-screen-xl m-auto">
        <h1 className="text-lg lg:text-2xl text-navy font-light text-center mb-5">
          Some of The Companies that Trust Us
        </h1>
        <div className="flex items-center overflow-x-auto max-w-screen-lg m-auto">
          {/* <Carousel> */}
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/partners/${logo}`}
              alt={`Logo ${index + 1}`}
              className="inline-block mx-4 w-20 h-auto"
            />
          ))}
          {/* </Carousel> */}
        </div>
      </div>
    </div>
  );
};

export default partnersComponent;
