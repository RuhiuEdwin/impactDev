import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  budget: string;
  preferredFormat: string[];
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
  formData = {
    budget: "",
    preferredFormat: [],
    specificFeatures: "",
  },
  updateFormData,
}) => {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if all form fields are filled
    const checkFormFilled = () => {
      const { budget, preferredFormat } = formData;
      return budget !== "" && preferredFormat.length > 0;
    };

    setIsFormFilled(checkFormFilled());
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" && name === "preferredFormat") {
      const checkbox = e.target as HTMLInputElement;
      let updatedArray = [...formData.preferredFormat];

      if (checkbox.checked) {
        updatedArray.push(value);
      } else {
        updatedArray = updatedArray.filter((item) => item !== value);
      }

      updateFormData({ [name]: updatedArray });
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
      onNextStep();
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
            What is your budget for implementing sustainability practices?
          </h4>
          <div className="flex flex-col items-start">
            {/* Radio options for budget */}
            {[
              "BELOW $2500",
              "$2500 - $5000",
              "$10,000 - $15,000",
              "$15,000 - $25,000",
              "ABOVE $25,000",
              "No Budget Allocation",
            ].map((option) => (
              <div key={option} className="flex gap-1 items-center">
                <input
                  type="radio"
                  id={option.replace(/\W/g, "-").toLowerCase()}
                  name="budget"
                  value={option}
                  checked={formData.budget === option}
                  onChange={handleChange}
                />
                <label className="text-xs lg:text-sm">{option}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Add radio inputs for preferred format */}
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-bold text-sm">
            What's your preferred format of the resources?
          </h4>
          <div className="flex flex-col items-start">
            {/* Checkboxes for preferred format */}
            {[
              "Webinars",
              "Guides",
              "Case Studies",
              "Interactive Tools",
              "One-On-One",
              "Group",
              "Template",
              "Checklist",
              "Policy Maps",
            ].map((format) => (
              <div key={format} className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  id={format.replace(/\W/g, "-").toLowerCase()}
                  name="preferredFormat"
                  value={format}
                  checked={formData.preferredFormat.includes(format)}
                  onChange={handleChange}
                />
                <label className="text-xs lg:text-sm">{format}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Add textarea for specific features or content */}
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-bold text-sm">
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
        <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-between items-center w-full mt-10">
          <button
            onClick={onPreviousStep}
            className="text-navy p-2 border border-navy rounded-sm text-center font-bold w-full hover:bg-navy hover:text-snow"
          >
            BACK
          </button>
          <button
            type="submit"
            className={`p-2 w-full rounded-sm text-center font-bold ${
              isFormFilled
                ? "bg-navy text-snow hover:bg-darkGreen hover:border hover:border-darkGreen"
                : "bg-snow text-navy"
            }`}
            disabled={!isFormFilled || isSubmitting}
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Four;
