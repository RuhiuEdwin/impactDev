import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  budget: string;
  preferredFormat: string;
  specificFeatures: string;
};

type FourProps = {
  onNextStep: () => void;
  onPreviousStep: () => void;
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
};

const Four: React.FC<FourProps> = ({
  onNextStep,
  onPreviousStep,
  formData,
  updateFormData,
}) => {
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    // Check if all form fields are filled
    const checkFormFilled = () => {
      const { budget, preferredFormat } = formData;
      return budget !== "" && preferredFormat !== "";
    };

    setIsFormFilled(checkFormFilled());
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  console.log(formData);

  try {
    await emailjs.send("service_1n66ce3", "template_he2puiu", formData, {
      publicKey: "rxKL7gEdwZxXJr98e",
    });
    console.log("SUCCESS!");
    onNextStep();
  } catch (error) {
    console.error("FAILED...", error);
    // Handle the error appropriately, if needed
  }
};


  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 mt-5 items-start w-full"
      >
        <div className="flex flex-col gap-1 items-start">
          <h4 className="text-sm">
            What is your budget for implementing sustainability practices?
          </h4>
          <div className="flex flex-col items-start">
            {/* Update input values and names */}
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="basic"
                name="budget"
                value="Basic/Minimal Investment Bracket (0.5% - 1% of annual revenue)"
                checked={
                  formData.budget ===
                  "Basic/Minimal Investment Bracket (0.5% - 1% of annual revenue)"
                }
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">
                Basic/Minimal Investment Bracket (0.5% - 1% of annual revenue)
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="moderate"
                name="budget"
                value="Moderate Investment Bracket (1% - 2% of annual revenue)"
                checked={
                  formData.budget ===
                  "Moderate Investment Bracket (1% - 2% of annual revenue)"
                }
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">
                Moderate Investment Bracket (1% - 2% of annual revenue)
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="substantial"
                name="budget"
                value="Substantial Investment Bracket (2% - 4% of annual revenue) OR Usd 5000 - 10,000, Usd 11000 - 20,000, Above 25,000"
                checked={
                  formData.budget ===
                  "Substantial Investment Bracket (2% - 4% of annual revenue) OR Usd 5000 - 10,000, Usd 11000 - 20,000, Above 25,000"
                }
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">
                Substantial Investment Bracket (2% - 4% of annual revenue) OR
                Usd 5000 - 10,000, Usd 11000 - 20,000, Above 25,000
              </label>
            </div>
          </div>
        </div>
        {/* Add radio inputs for preferred format */}
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="text-sm">
            What's your preferred format of the resources?
          </h4>
          <div className="flex flex-col items-start">
            {/* Update input values and names */}
            {/* Use handleChange to update formData */}
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="webinars"
                name="preferredFormat"
                value="Webinars"
                checked={formData.preferredFormat === "Webinars"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">Webinars</label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="guides"
                name="preferredFormat"
                value="Guides"
                checked={formData.preferredFormat === "Guides"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">Guides</label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="caseStudies"
                name="preferredFormat"
                value="Case Studies"
                checked={formData.preferredFormat === "Case Studies"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">
                Case Studies
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="interactiveTools"
                name="preferredFormat"
                value="Interactive Tools"
                checked={formData.preferredFormat === "Interactive Tools"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">
                Interactive Tools
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="One-On-One"
                name="preferredFormat"
                value="One-On-One"
                checked={formData.preferredFormat === "One-On-One"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">One-On-One</label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="group"
                name="preferredFormat"
                value="Group"
                checked={formData.preferredFormat === "Group"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">Group</label>
            </div>
          </div>
        </div>
        {/* Add textarea for specific features or content */}
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="text-sm">
            Any specific features or content you would like to see in the
            sustainability tools/resources?
          </h4>
          <textarea
            rows={4}
            name="specificFeatures"
            value={formData.specificFeatures}
            onChange={handleChange}
            className="w-full bg-white rounded-sm p-2 text-navy"
          ></textarea>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-between items-center w-full">
          <button
            onClick={onPreviousStep}
            className="text-snow bg-navy p-2  rounded-sm text-center font-bold w-full"
          >
            BACK
          </button>
          <button
            type="submit"
            className={`text-snow p-2  rounded-sm text-center font-bold w-full ${
              isFormFilled ? "bg-darkGreen" : "bg-snow"
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

export default Four;
