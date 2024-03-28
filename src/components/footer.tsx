// footer.js

const currentYear = new Date().getFullYear();

const footer = () => {
  return (
    <div className="bg-white px-5 py-5 flex flex-col lg:flex-row max-w-screen-xl m-auto items-center justify-center lg:justify-between gap-2 w-full">
      <p className="font-light text-xs">© {currentYear} - ImpactTower</p>
      <p className="font-black text-sm">Your Toolbox For Impact!</p>
    </div>
  );
};

export default footer;
