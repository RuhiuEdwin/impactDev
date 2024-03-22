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
  formData,
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
          <h4 className="text-sm">
            What is your budget for implementing sustainability practices?
          </h4>
          <div className="flex flex-col items-start">
            {/* Update input values and names */}
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="2500-"
                name="budget"
                value="BELOW $2500"
                checked={formData.budget === "BELOW $2500"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                BELOW $2500
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="2500+"
                name="budget"
                value="$2500 - $5000"
                checked={formData.budget === "$2500 - $5000"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                $2500 - $5000
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="10000+"
                name="budget"
                value="$10,000 - $15,000"
                checked={formData.budget === "$10,000 - $15,000"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                $10,000 - $15,000
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="15000+"
                name="budget"
                value="$15,000 - $25,000"
                checked={formData.budget === "$15,000 - $25,000"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                $15,000 - $25,000
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="25000+"
                name="budget"
                value="ABOVE $25,000"
                checked={formData.budget === "ABOVE $25,000"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                ABOVE $25,000
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="radio"
                id="noBudget"
                name="budget"
                value="No Budget Allocation"
                checked={formData.budget === "No Budget Allocation"}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                No Budget Allocation
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
                type="checkbox"
                id="webinars"
                name="preferredFormat"
                value="Webinars"
                checked={formData.preferredFormat.includes("Webinars")}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">Webinars</label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="checkbox"
                id="guides"
                name="preferredFormat"
                value="Guides"
                checked={formData.preferredFormat.includes("Guides")}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">Guides</label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="checkbox"
                id="caseStudies"
                name="preferredFormat"
                value="Case Studies"
                checked={formData.preferredFormat.includes("Case Studies")}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                Case Studies
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="checkbox"
                id="interactiveTools"
                name="preferredFormat"
                value="Interactive Tools"
                checked={formData.preferredFormat.includes("Interactive Tools")}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                Interactive Tools
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="checkbox"
                id="One-On-One"
                name="preferredFormat"
                value="One-On-One"
                checked={formData.preferredFormat.includes("One-On-One")}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                One-On-One
              </label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="checkbox"
                id="group"
                name="preferredFormat"
                value="Group"
                checked={formData.preferredFormat.includes("Group")}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">Group</label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="checkbox"
                id="template"
                name="preferredFormat"
                value="Template"
                checked={formData.preferredFormat.includes("Template")}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">Template</label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="checkbox"
                id="checklist"
                name="preferredFormat"
                value="Checklist"
                checked={formData.preferredFormat.includes("Checklist")}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">Checklist</label>
            </div>
            <div className="flex gap-1 items-start">
              <input
                type="checkbox"
                id="policyMaps"
                name="preferredFormat"
                value="Policy Maps"
                checked={formData.preferredFormat.includes("Policy Maps")}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                Policy Maps
              </label>
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
        <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-between items-center w-full mt-10">
          <button
            onClick={onPreviousStep}
            className="text-snow p-2 border border-snow rounded-sm text-center font-bold w-full hover:bg-snow hover:text-navy"
          >
            BACK
          </button>
          <button
            type="submit"
            className={`p-2 w-full rounded-sm text-center font-bold ${
              isFormFilled
                ? "bg-navy text-darkGreen hover:bg-darkGreen hover:border hover:border-darkGreen hover:text-snow"
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
