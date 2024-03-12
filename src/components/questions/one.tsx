import React from 'react';

type onNextStep = () => void;
type onPreviousStep = () => void;

const one = ({
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
          <h4 className="font-light text-sm">Whats your Company Size?</h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Micro-sized business: less than 10 employees
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Small-sized business: 10 - 49 employees
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Medium business: 50 - 249 employees
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">
                Large-sized business: more than 250 employees
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-light text-sm">
            Where is the country of your operations
          </h4>
          <input className="w-full bg-white rounded-sm" />
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-light text-sm">
            Are you currently engaged in any sustainability initiatives or
            practices?
          </h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">Yes</label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" name="" value="" />
              <label className="text-xs font-extralight">No</label>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-start w-full">
            <h4 className="font-light text-sm">
              If yes, please briefly describe your current sustainability
              initiatives.
            </h4>
            <input className="w-full bg-white rounded-sm" />
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

export default one;
