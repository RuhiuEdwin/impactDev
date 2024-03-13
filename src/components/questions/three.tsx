type onNextStep = () => void;
type onPreviousStep = () => void;
const three = ({
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
            What specific challenges or goals are you hoping to address through
            access to sustainability & Impact tools?
          </h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                Enhancing sustainability performance
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                Accessing new markets/opportunities
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                Meeting stakeholder expectations
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                Cost reduction/savings through efficiency improvements
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-start w-full">
            <h4 className="text-sm">Other (please specify)</h4>
            <textarea
              rows={4}
              className="w-full bg-white rounded-sm p-2"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="text-sm">
            Do you have a designated sustainability team or officer responsible
            for implementing sustainable and/or responsible practices?
          </h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                Have internal team / person
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                Work with external consultant(s)
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs lg:text-sm font-thin">
                In search for a partner / team
              </label>
            </div>
          </div>
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

export default three;
