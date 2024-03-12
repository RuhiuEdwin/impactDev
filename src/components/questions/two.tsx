// import { Carousel } from 'react-responsive-carousel';

type onNextStep = () => void;
type onPreviousStep = () => void;
const two = ({
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
            Rank the following sustainability priorities for your organization{" "}
            <br></br>
            (1 = highest priority, 5 = lowest priority)
          </h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input type="number" min={1} max={5} id="" name="" value="" />
              <label className="text-xs font-extralight">
                Environmental conservation (e.g., reducing carbon footprint,
                waste management)
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="number" min={1} max={5} id="" name="" value="" />
              <label className="text-xs font-extralight">
                Social responsibility (e.g., fair labor practices, community
                engagement)
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="number" min={1} max={5} id="" name="" value="" />
              <label className="text-xs font-extralight">
                Fair trade (e.g., ethical sourcing, supply chain transparency)
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="number" min={1} max={5} id="" name="" value="" />
              <label className="text-xs font-extralight">
                Climate action (e.g., mitigation strategies, adaptation
                measures)
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="number" min={1} max={5} id="" name="" value="" />
              <label className="text-xs font-extralight">
                Gender equality ,diversity and inclusion
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-light text-sm">
            Are there any specific sustainability standards or frameworks your
            organization is already familiar with or interested in aligning
            with? (e.g., ISO 14001, GRI Standards, Fairtrade Standards)
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

export default two;
