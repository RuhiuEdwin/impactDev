type onNextStep = () => void;
type onPreviousStep = () => void;
const four = ({
  onNextStep,
  onPreviousStep,
}: {
  onNextStep: onNextStep;
  onPreviousStep: onPreviousStep;
}) => {
  return (
    <div>
      <form className="flex flex-col gap-3 mt-5 items-start w-full">
        <div className="flex flex-col gap-1 items-start">
          <h4 className="text-sm">
            What is your  budget for implementing sustainability practices?
          </h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                Basic/Minimal Investment Bracket (0.5% - 1% of annual revenue)
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                Moderate Investment Bracket (1% - 2% of annual revenue)
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                Substantial Investment Bracket (2% - 4% of annual revenue) OR
                Usd 5000 - 10,000, Usd 11000 - 20,000, Above 25,000
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="text-sm">
            What's your preferred format of the resources?
          </h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">Webinars</label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">Guides</label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                Case Studies
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                Interactive Tools
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">One-On-One</label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">Group</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="text-sm">
            Any specific features or content you would like to see in the
            sustainability tools/resources?
          </h4>
          <textarea rows={6} className="w-full bg-white rounded-sm"></textarea>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-between items-center w-full">
          <button
            onClick={onPreviousStep}
            className="text-snow bg-navy p-2  rounded-sm text-center font-bold w-full"
          >
            BACK
          </button>
          <button
            onClick={onNextStep}
            className="text-snow bg-darkGreen p-2  rounded-sm text-center font-bold w-full"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default four;
