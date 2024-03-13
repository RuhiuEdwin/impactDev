import React, { useState, useEffect } from "react";

type FormData = {
  companySize: string;
  countryOfOperations: string;
  sustainabilityInitiatives: string;
  sustainabilityInitiativesEngaged: string;
};

type TwoProps = {
  onNextStep: () => void;
  onPreviousStep: () => void;
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
};

const Two: React.FC<TwoProps> = ({
  onNextStep,
  onPreviousStep,
  formData,
  updateFormData,
}) => {
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    // Check if all form fields are filled
    const checkFormFilled = () => {
      const { companySize, countryOfOperations, sustainabilityInitiatives } =
        formData;
      return (
        companySize !== "" &&
        countryOfOperations !== "" &&
        sustainabilityInitiatives !== ""
      );
    };

    setIsFormFilled(checkFormFilled());
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <form className="flex flex-col gap-3 mt-5 items-start w-full">
        <div className="flex flex-col gap-1 items-start">
          <h4 className="text-sm">What's your Company Size?</h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                id="micro"
                name="companySize"
                value="Micro-sized business: less than 10 employees"
                checked={
                  formData.companySize ===
                  "Micro-sized business: less than 10 employees"
                }
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">
                Micro-sized business: less than 10 employees
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                id="micro"
                name="companySize"
                value="Medium business: 50 - 249 employees"
                checked={
                  formData.companySize === "Medium business: 50 - 249 employees"
                }
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">
                Medium business: 50 - 249 employees
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                id="micro"
                name="companySize"
                value="Large-sized business: more than 250 employees"
                checked={
                  formData.companySize ===
                  "Large-sized business: more than 250 employees"
                }
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">
                Large-sized business: more than 250 employees
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h4 className="font-light text-sm">
            Where is the country of your operations
          </h4>
          <input
            type="text"
            name="countryOfOperations"
            value={formData.countryOfOperations}
            onChange={handleChange}
            placeholder="Country of Operations"
            className="w-full bg-white rounded-sm lg:p-3 pl-2 p-1 text-navy"
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h4 className="text-sm">
            Are you currently engaged in any sustainability initiatives or
            practices?
          </h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                id="sustainabilityYes"
                name="sustainabilityInitiatives"
                value="Yes"
                checked={formData.sustainabilityInitiatives === "Yes"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">Yes</label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                id="sustainabilityNo"
                name="sustainabilityInitiatives"
                value="No"
                checked={formData.sustainabilityInitiatives === "No"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">No</label>
            </div>
          </div>
          {formData.sustainabilityInitiatives === "Yes" && (
            <div className="flex flex-col gap-1 items-start w-full">
              <h4 className=" text-sm">
                If yes, please briefly describe your current sustainability
                initiatives.
              </h4>
              <textarea
                rows={4}
                name="sustainabilityInitiatives"
                value={formData.sustainabilityInitiativesEngaged}
                onChange={handleChange}
                className="w-full bg-white rounded-sm pl-2 text-navy"
              ></textarea>
            </div>
          )}
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-between items-center w-full mt-10">
          <button
            onClick={onPreviousStep}
            className="text-snow p-2 border border-snow rounded-sm text-center font-bold w-full hover:bg-snow hover:text-navy"
          >
            BACK
          </button>
          <button
            onClick={onNextStep}
            className={`p-2 w-full rounded-sm text-center font-bold ${
              isFormFilled
                ? "bg-navy text-darkGreeen hover:bg-darkGreen hover:border hover:border-darkGreen"
                : "bg-snow text-navy"
            }`}
            disabled={!isFormFilled}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Two;
