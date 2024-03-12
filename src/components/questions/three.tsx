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
          <h4 className="font-light text-sm">
            What specific challenges or goals are you hoping to address through
            access to sustainability & Impact tools?
          </h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Enhancing sustainability performance
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Accessing new markets/opportunities
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Meeting stakeholder expectations
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Cost reduction/savings through efficiency improvements
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-start w-full">
            <h4 className="font-light text-sm">Other (please specify)</h4>
            <textarea className="w-full bg-white rounded-sm"></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-light text-sm">
            Do you have a designated sustainability team or officer responsible
            for implementing sustainable and/or responsible practices?
          </h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Have internal team / person
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Work with external consultant(s)
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                In search for a partner / team
              </label>
            </div>
          </div>
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

export default three;
