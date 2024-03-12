type FormData = {
  fullName: string;
  emailAddress: string;
  companyName: string;
  helpType: string;
};

// Define the type of closeWaitlistForm
type onNextStep = () => void;
const waitlistForm = ({ onNextStep }: { onNextStep: onNextStep }) => {
  return (
    <div>
      <p className="text-sm lg:text-base  font-light text-center mt-2">
        ImpacTower provides a Toolbox of{" "}
        <span className="text-navy font-bold">
          Impact resources & Toolkits 
        </span>
      </p>
      <form className="flex flex-col gap-3 mt-5 items-start w-full">
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-light text-sm">FULL NAMES</h4>
          <input className="w-full bg-white rounded-sm" />
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-light text-sm">EMAIL ADDRESS</h4>
          <input className="w-full bg-white rounded-sm" />
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-light text-sm">COMPANY NAME</h4>
          <input className="w-full bg-white rounded-sm" />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h4 className="font-light text-sm">HOW CAN WE HELP YOU?</h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">GUIDES</label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">TOOLKITS</label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                CERTIFICATION
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                ALL THE ABOVE
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={onNextStep}
          className="text-snow bg-navy p-2 w-full rounded-sm text-center font-bold"
        >
          FREE TOOLBOX ACCESS
        </button>
      </form>
    </div>
  );
};

export default waitlistForm;
