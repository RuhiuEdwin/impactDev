type onNextStep = () => void;
type onPreviousStep = () => void;
const four = ({
  onNextStep,
  onPreviousStep,
}: {
  onNextStep: onNextStep;
  onPreviousStep: onPreviousStep;
})  => {
  return (
    <div>
      <form className="flex flex-col gap-3 mt-5 items-start w-full">
        <div className="flex flex-col gap-1 items-start">
          <h4 className="font-light text-sm">
            What is your  budget for implementing sustainability practices?
          </h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Basic/Minimal Investment Bracket (0.5% - 1% of annual revenue)
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Moderate Investment Bracket (1% - 2% of annual revenue)
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Substantial Investment Bracket (2% - 4% of annual revenue) OR
                Usd 5000 - 10,000, Usd 11000 - 20,000, Above 25,000
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-light text-sm">
            What's your preferred format of the resources?
          </h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">Webinars</label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">Guides</label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">Case Studies</label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Interactive Tools
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">One-On-One</label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">Group</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-light text-sm">
            Any specific features or content you would like to see in the
            sustainability tools/resources?
          </h4>
          <textarea className="w-full bg-white rounded-sm"></textarea>
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            onClick={onPreviousStep}
            className="text-snow bg-navy p-2 w-1/3 rounded-sm text-center font-bold"
          >
            BACK
          </button>
          <button
            onClick={onNextStep}
            className="text-snow bg-olive p-2 w-1/3 rounded-sm text-center font-bold"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default four;
