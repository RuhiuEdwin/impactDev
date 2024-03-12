"use client";

import React, { useState } from "react";
import Main from "./waitlistForm";
import One from "./questions/one";
import Two from "./questions/two";
import Three from "./questions/three";
import Four from "./questions/four";
import Five from "./questions/five";

type closeWaitlistForm = () => void;

const questionsComponent = ({
  closeWaitlistForm,
}: {
  closeWaitlistForm: closeWaitlistForm;
}) => {
  const [currentStep, setCurrentStep] = useState(1); // Initial step

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="bg-navy border border-opacity-40 flex items-center justify-center w-screen h-screen absolute top-0 left-0 z-20">
      <div className="bg-olive rounded-sm drop-shadow-xl flex flex-col items-center justify-center text-white w-11/12 p-5">
        <h1 className="text-xl lg:text-2xl font-bold text-center border-b border-b-dakGreen pb-2">
          Access Impact Tool-Box
        </h1>
        {currentStep === 1 && <Main onNextStep={handleNextStep} />}
        {currentStep === 2 && (
          <One
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 3 && (
          <Two
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 4 && (
          <Three
            onNextStep={handleNextStep}
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
