import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  goals: string[];
  otherGoal: string;
  sustainabilityTeam: string[];
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
  formData,
  updateFormData,
}) => {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if all form fields are filled
    const checkFormFilled = () => {
      const { goals, sustainabilityTeam } = formData;
      return goals.length > 0 && sustainabilityTeam.length > 0;
    };

    setIsFormFilled(checkFormFilled());
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" && name === "goals") {
      const checkbox = e.target as HTMLInputElement;
      let updatedArray = [...formData.goals];

      if (checkbox.checked) {
        updatedArray.push(value);
      } else {
        updatedArray = updatedArray.filter((item) => item !== value);
      }

      updateFormData({ [name]: updatedArray });
    } else if (type === "checkbox" && name === "sustainabilityTeam") {
      const checkbox = e.target as HTMLInputElement;
      let updatedArray = [...formData.sustainabilityTeam];

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
          <h4 className="text-sm">
            What specific challenges or goals are you hoping to address through
            access to sustainability & Impact tools?
          </h4>
          <div className="flex flex-col items-start">
            {/* Checkboxes for goals */}
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="enhancingSustainability"
                name="goals"
                value="Enhancing sustainability performance"
                checked={formData.goals.includes(
                  "Enhancing sustainability performance"
                )}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                Enhancing sustainability performance
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="newMarkets"
                name="goals"
                value="Accessing new markets/opportunities"
                checked={formData.goals.includes(
                  "Accessing new markets/opportunities"
                )}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                Accessing new markets/opportunities
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="stakeHolder"
                name="goals"
                value="Meeting stakeholder expectations"
                checked={formData.goals.includes(
                  "Meeting stakeholder expectations"
                )}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                Meeting stakeholder expectations
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="costReduction"
                name="goals"
                value="Cost reduction/savings through efficiency improvements"
                checked={formData.goals.includes(
                  "Cost reduction/savings through efficiency improvements"
                )}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                Cost reduction/savings through efficiency improvements
              </label>
            </div>
          </div>
        </div>
        {/* Textarea for other goal */}
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="text-sm">Other (please specify)</h4>
          <textarea
            rows={4}
            name="otherGoal"
            value={formData.otherGoal}
            onChange={handleChange}
            className="w-full bg-white rounded-sm p-2 text-navy"
          ></textarea>
        </div>
        {/* Checkboxes for sustainability team */}
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="text-sm">
            Do you have a designated sustainability team or officer responsible
            for implementing sustainable and/or responsible practices?
          </h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="internalTeam"
                name="sustainabilityTeam"
                value="Have internal team / person"
                checked={formData.sustainabilityTeam.includes(
                  "Have internal team / person"
                )}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                Have internal team / person
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="consultants"
                name="sustainabilityTeam"
                value="Work with external consultant(s)"
                checked={formData.sustainabilityTeam.includes(
                  "Work with external consultant(s)"
                )}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                Work with external consultant(s)
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="partner"
                name="sustainabilityTeam"
                value="In search for a partner / team"
                checked={formData.sustainabilityTeam.includes(
                  "In search for a partner / team"
                )}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-light">
                In search for a partner / team
              </label>
            </div>
          </div>
        </div>
        {/* Navigation buttons */}
        <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-between items-center w-full mt-10">
          <button
            onClick={onPreviousStep}
            className="text-snow p-2 border border-snow rounded-sm text-center font-bold w-full hover:bg-snow hover:text-navy"
          >
            BACK
          </button>
          <button
            type="submit"
            className="text-snow p-2 border border-snow rounded-sm text-center font-bold w-full hover:bg-snow hover:text-navy"
          >
            {isSubmitting ? "LOADING..." : "CLOSE"}
          </button>
        </div>
        <button
          onClick={onNextStep}
          className={`p-2 w-full rounded-sm text-center font-bold ${
            isFormFilled
              ? "bg-navy text-darkGreen hover:bg-darkGreen hover:border hover:border-darkGreen hover:text-snow"
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
