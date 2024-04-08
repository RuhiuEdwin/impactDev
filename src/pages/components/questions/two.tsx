import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  sustainabilityPriorities: {
    environmentalConservation: number;
    socialResponsibility: number;
    fairTrade: number;
    climateAction: number;
    genderEquality: number;
  };
  sustainabilityStandards: string;
};

type ThreeProps = {
  onNextStep: () => void;
  onPreviousStep: () => void;
  closeWaitlistForm: () => void;
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
};

const Three: React.FC<ThreeProps> = ({
  onNextStep,
  onPreviousStep,
  closeWaitlistForm,
  formData = {
    sustainabilityPriorities: {
      environmentalConservation: 1,
      socialResponsibility: 1,
      fairTrade: 1,
      climateAction: 1,
      genderEquality: 1,
    },
    sustainabilityStandards: "",
  },
  updateFormData,
}) => {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if all form fields are filled
    const checkFormFilled = () => {
      const { sustainabilityPriorities, sustainabilityStandards } = formData;
      return (
        Object.values(sustainabilityPriorities).every(
          (value) => value >= 1 && value <= 5
        ) && sustainabilityStandards !== ""
      );
    };

    setIsFormFilled(checkFormFilled());
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      updateFormData({
        sustainabilityPriorities: {
          ...formData.sustainabilityPriorities,
          [name]: parseInt(value),
        },
      });
    } else {
      updateFormData({ [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);

    try {
      await emailjs.send("service_1n66ce3", "template_he2puiu", formData, {
        publicKey: "rxKL7gEdwZxXJr98e",
      });
      console.log("SUCCESS!");
      setIsSubmitting(false);
      closeWaitlistForm();
    } catch (error) {
      console.error("FAILED...", error);
      setIsSubmitting(false);
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
          <h4 className="font-bold text-sm">
            Rank the following sustainability priorities for your organization{" "}
            <br />
            (1 = highest priority, 5 = lowest priority)
          </h4>
          <div className="flex flex-col items-start gap-2">
            <div className="flex gap-1 items-start">
              <input
                className="text-navy pl-1"
                type="number"
                min={1}
                max={5}
                id="environmentalConservation"
                name="environmentalConservation"
                value={
                  formData.sustainabilityPriorities.environmentalConservation
                }
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm">
                Environmental conservation (e.g., reducing carbon footprint,
                waste management)
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                className="text-navy pl-1"
                type="number"
                min={1}
                max={5}
                id="socialResponsibility"
                name="socialResponsibility"
                value={formData.sustainabilityPriorities.socialResponsibility}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm">
                Social responsibility (e.g., fair labor practices, community
                engagement)
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                className="text-navy pl-1"
                type="number"
                min={1}
                max={5}
                id="fairTrade"
                name="fairTrade"
                value={formData.sustainabilityPriorities.fairTrade}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm">
                Fair trade (e.g., ethical sourcing, supply chain transparency)
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                className="text-navy pl-1"
                type="number"
                min={1}
                max={5}
                id="climateAction"
                name="climateAction"
                value={formData.sustainabilityPriorities.climateAction}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm">
                Climate action (e.g., mitigation strategies, adaptation
                measures)
              </label>
            </div>
            <div className="flex gap-1 items-start ">
              <input
                className="text-navy pl-1"
                type="number"
                min={1}
                max={5}
                id="genderEquality"
                name="genderEquality"
                value={formData.sustainabilityPriorities.genderEquality}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm">
                Gender equality ,diversity and inclusion
              </label>
            </div>
          </div>
        </div>
        {/* Add textarea for sustainability standards */}
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-bold text-sm">
            Are there any specific sustainability standards or frameworks your
            organization is already familiar with or interested in aligning
            with? (e.g., ISO 14001, GRI Standards, Fairtrade Standards)
          </h4>
          <textarea
            rows={4}
            name="sustainabilityStandards"
            value={formData.sustainabilityStandards}
            onChange={handleChange}
            className="w-full bg-white rounded-sm p-2 text-navy"
          ></textarea>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-between items-center w-full mt-10">
          <button
            onClick={onPreviousStep}
            className="text-navy p-2 border border-navy rounded-sm text-center font-bold w-full hover:bg-navy hover:text-snow"
          >
            BACK
          </button>
          <button
            type="submit"
            className="text-navy p-2 border border-navy rounded-sm text-center font-bold w-full hover:bg-navy hover:text-snow"
          >
            {isSubmitting ? "LOADING..." : "CLOSE"}
          </button>
        </div>
        <button
          onClick={onNextStep}
          className={`p-2 w-full rounded-sm text-center font-bold ${
            isFormFilled
              ? "bg-navy text-snow hover:bg-darkGreen hover:border hover:border-darkGreen"
              : "bg-snow text-navy"
          }`}
          disabled={!isFormFilled}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Three;
