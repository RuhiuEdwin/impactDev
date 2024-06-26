import React, { useState, useRef, useEffect } from "react";
import Main from "./waitlistForm";
import One from "./questions/one";
import Two from "./questions/two";
import Three from "./questions/three";
import Four from "./questions/four";
import Five from "./questions/five";
// 2d4fd685dfce879ec9e796026f4768be-us18
type closeWaitlistForm = () => void;

type FormData = {
  fullName: string;
  emailAddress: string;
  companyName: string;
  helpType: string[];
  companySize: string;
  countryOfOperations: string;
  sector: string;
  operations: string;
  countries: string;
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
  budget: string;
  preferredFormat: string[];
  specificFeatures: string;
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
    countries: "",
    sector: "",
    operations: "",
    sustainabilityInitiatives: "",
    sustainabilityInitiativesEngaged: "",
    sustainabilityPriorities: {
      environmentalConservation: 1,
      socialResponsibility: 1,
      fairTrade: 1,
      climateAction: 1,
      genderEquality: 1,
    },
    sustainabilityStandards: "",
    goals: [],
    otherGoal: "",
    sustainabilityTeam: [],
    budget: "",
    preferredFormat: [],
    specificFeatures: "",
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
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeWaitlistForm();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeWaitlistForm]);



  return (
    <div
      // onClick={closeWaitlistForm}
      className="bg-navy bg-opacity-60 backdrop-blur-sm flex items-center justify-center w-full h-full fixed top-0 left-0 z-20  overflow-auto mx-auto"
    >
      <div className="bg-none relative h-full w-full flex items-center justify-center pb-10">
        <div
          ref={modalRef}
          className="absolute top-20 m-auto bg-opGreen rounded-sm lg:rounded-lg drop-shadow-xl flex flex-col items-center justify-center text-navy lg:w-1/3 md:w-2/3 w-10/12 p-5 py-10 mt-10 mb-40  overflow-auto"
        >
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
              closeWaitlistForm={closeWaitlistForm}
            />
          )}
          {currentStep === 3 && (
            <Two
              onNextStep={handleNextStep}
              formData={formData}
              updateFormData={updateFormData}
              onPreviousStep={handlePreviousStep}
              closeWaitlistForm={closeWaitlistForm}
            />
          )}
          {currentStep === 4 && (
            <Three
              onNextStep={handleNextStep}
              formData={formData}
              updateFormData={updateFormData}
              onPreviousStep={handlePreviousStep}
              closeWaitlistForm={closeWaitlistForm}
            />
          )}
          {currentStep === 5 && (
            <Four
              onNextStep={handleNextStep}
              formData={formData}
              updateFormData={updateFormData}
              onPreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 6 && <Five closeWaitlistForm={closeWaitlistForm} />}
        </div>
      </div>
    </div>
  );
};

export default questionsComponent;
