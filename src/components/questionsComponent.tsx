"use client";

import React, { useState } from "react";
import Main from "./waitlistForm";
import One from "./questions/one";
import Two from "./questions/two";
import Three from "./questions/three";
import Four from "./questions/four";
import Five from "./questions/five";

type closeWaitlistForm = () => void;

type FormData = {
  fullName: string;
  emailAddress: string;
  companyName: string;
  helpType: string[];
  companySize: string;
  countryOfOperations: string;
  sustainabilityInitiatives: string;
  sustainabilityInitiativesEngaged: string;
  sustainabilityPriorities: {
    environmentalConservation: number;
    socialResponsibility: number;
    fairTrade: number;
    climateAction: number;
    genderEquality: number;
  };
  sustainabilityStandards: string;
  goals: string[];
  otherGoal: string;
  sustainabilityTeam: string[];
};

const questionsComponent = ({
  closeWaitlistForm,
}: {
  closeWaitlistForm: closeWaitlistForm;
}) => {
  const [currentStep, setCurrentStep] = useState(1); // Initial step
const [formData, setFormData] = useState<FormData>({
  fullName: "",
  emailAddress: "",
  companyName: "",
  helpType: [],
  companySize: "",
  countryOfOperations: "",
  sustainabilityInitiatives: "",
  sustainabilityInitiativesEngaged: "",
  sustainabilityPriorities: {
    environmentalConservation: 0, 
    socialResponsibility: 0,
    fairTrade: 0,
    climateAction: 0,
    genderEquality: 0,
  },
  sustainabilityStandards: "",
  goals: [],
  otherGoal: "",
  sustainabilityTeam: [],
});


  const handleNextStep = () => {
    console.log(formData);
    setCurrentStep(currentStep + 1);
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <div
      // onClick={closeWaitlistForm}
      className="bg-navy bg-opacity-40 flex items-center justify-center w-screen h-screen absolute top-0 left-0 z-20"
    >
      <div className="bg-olive rounded-sm lg:rounded-lg drop-shadow-xl flex flex-col items-center justify-center text-white lg:w-1/3 md:w-2/3 w-11/12 p-5 py-10 pb-10">
        {currentStep !== 6 ? (
          <h1 className="text-xl lg:text-3xl font-bold text-center pb-2 border-b border-b-darkGreen mb-5">
            Access Impact Tool-Box
          </h1>
        ) : (
          <h1 className="text-xl lg:text-3xl font-bold text-center pb-2 border-b border-b-darkGreen mb-5">
            Thank you for your responses
          </h1>
        )}
        {currentStep === 1 && (
          <Main
            onNextStep={handleNextStep}
            formData={formData}
            updateFormData={updateFormData}
          />
        )}
        {currentStep === 2 && (
          <One
            onNextStep={handleNextStep}
            formData={formData}
            updateFormData={updateFormData}
            onPreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 3 && (
          <Two
            onNextStep={handleNextStep}
            formData={formData}
            updateFormData={updateFormData}
            onPreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 4 && (
          <Three
            onNextStep={handleNextStep}
            formData={formData}
            updateFormData={updateFormData}
            onPreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 5 && (
          <Four
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 6 && <Five closeWaitlistForm={closeWaitlistForm} />}
      </div>
    </div>
  );
};

export default questionsComponent;
