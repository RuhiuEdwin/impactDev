import React, { useState, useEffect } from "react";

type FormData = {
  fullName: string;
  emailAddress: string;
  companyName: string;
  helpType: string[];
};

type WaitlistFormProps = {
  onNextStep: () => void;
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
};

const waitlistForm: React.FC<WaitlistFormProps> = ({
  onNextStep,
  formData,
  updateFormData,
}) => {
  const [isFormFilled, setIsFormFilled] = useState(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type } = e.target;
  //   updateFormData({ [name]: value });
  // };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedHelpType = [...formData.helpType];

      if (checked) {
        updatedHelpType.push(value); // Add to array if checked
      } else {
        updatedHelpType = updatedHelpType.filter((type) => type !== value); // Remove from array if unchecked
      }

      updateFormData({ [name]: updatedHelpType });
    } else {
      updateFormData({ [name]: value });
    }
  };


  useEffect(() => {
    // Check if all form fields are filled
    const checkFormFilled = () => {
      const { fullName, emailAddress, companyName, helpType } = formData;
      return (
        fullName !== "" &&
        emailAddress !== "" &&
        companyName !== "" &&
        helpType.length > 0
      );
    };

    setIsFormFilled(checkFormFilled());
  }, [formData]);

  return (
    <div>
      <p className="text-sm lg:text-base  font-light text-center mt-2">
        ImpacTower provides a Toolbox of{" "}
        <span className="text-navy font-bold">
          Impact resources & Toolkits 
        </span>
      </p>
      <form className="flex flex-col gap-3 mt-5 items-start w-full ">
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-light text-sm">FULL NAMES</h4>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full bg-white rounded-sm lg:p-3 pl-2 p-1 text-navy"
          />
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-light text-sm">EMAIL ADDRESS</h4>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full bg-white rounded-sm lg:p-3 pl-2 p-1 text-navy"
          />
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-light text-sm">COMPANY NAME</h4>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full bg-white rounded-sm lg:p-3 pl-2 p-1 text-navy"
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h4 className="font-light text-sm">HOW CAN WE HELP YOU?</h4>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="guides"
                name="helpType"
                value="guides"
                checked={formData.helpType.includes("guides")}
                onChange={handleChange}
              />
              <label className="text-xs lg:text-sm font-thin">GUIDES</label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="toolkits"
                name="helpType"
                value="toolkits"
                onChange={handleChange}
                checked={formData.helpType.includes("toolkits")}
              />
              <label className="text-xs lg:text-sm font-thin">TOOLKITS</label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="certifications"
                name="helpType"
                value="certifications"
                onChange={handleChange}
                checked={formData.helpType.includes("certifications")}
              />
              <label className="text-xs lg:text-sm font-thin">
                CERTIFICATIONS
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="all"
                name="helpType"
                value="all"
                onChange={handleChange}
                checked={formData.helpType.includes("all")}
              />
              <label className="text-xs lg:text-sm font-thin">
                ALL THE ABOVE
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={onNextStep}
          className={`p-2 w-full rounded-sm text-center font-bold mt-10 ${
            isFormFilled ? "bg-navy text-darkGreeen" : "bg-snow text-navy"
          }`}
          disabled={!isFormFilled}
        >
          FREE TOOLBOX ACCESS
        </button>
      </form>
    </div>
  );
};

export default waitlistForm;
