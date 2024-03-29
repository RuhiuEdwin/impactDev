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
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type } = e.target;
  //   updateFormData({ [name]: value });
  // };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedHelpType = [...formData.helpType];

      if (checked) {
        updatedHelpType.push(value);
      } else {
        updatedHelpType = updatedHelpType.filter((type) => type !== value);
      }

      updateFormData({ [name]: updatedHelpType });
    } else {
      updateFormData({ [name]: value });
    }
    setEmailError("");
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

  const validateEmail = (email: string): boolean => {
    console.log("validating email");
    // Regular expression for validating email address format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!validateEmail(formData.emailAddress)) {
      // Invalid email address
      setIsSubmitting(false);
      setEmailError("Please input a valid email address.");
      return; // Prevent further execution
    }

    try {
      const response = await fetch(
        "https://impactower.com/ping/addToList",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email_address: formData.emailAddress,
            status: "pending",
            merge_fields: {
              FNAME: formData.fullName,
              COMPANY: formData.companyName,
              EMAIL: formData.emailAddress,
              // You can add other merge fields here as needed
            },
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      setIsSubmitting(false);

      // Perform any additional actions after successful submission
      onNextStep();
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
      // Handle error appropriately, e.g., show error message to user
    }
  };

  return (
    <div>
      <p className="text-sm lg:text-base text-center mt-2 capitalize">
        Access Essential Toolkits and Resources to meet your sustainability
        Goals & ESG compliance needs <br></br>
        {/* <span className="text-navy font-bold uppercase">
          Sign up to receive free access
        </span> */}
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 mt-5 items-start w-full "
      >
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-bold text-sm">FULL NAMES</h4>
          <input
            required
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full bg-white rounded-sm lg:p-3 pl-2 p-1 text-navy"
          />
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-bold text-sm">EMAIL ADDRESS</h4>
          <input
            required
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Email Address"
            className={`w-full bg-white rounded-sm lg:p-3 pl-2 p-1 text-navy ${
              emailError ? "border-red-500" : ""
            }`}
          />
          {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <h4 className="font-bold text-sm">COMPANY NAME</h4>
          <input
            required
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full bg-white rounded-sm lg:p-3 pl-2 p-1 text-navy "
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h4 className="font-bold text-sm">HOW CAN WE HELP YOU?</h4>
          <div className="flex flex-col items-start">
            {/* Checkbox options */}
            {["guides", "toolkits", "certifications", "all"].map((option) => (
              <div key={option} className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  id={option}
                  name="helpType"
                  value={option}
                  checked={formData.helpType.includes(option)}
                  onChange={handleChange}
                />
                <label className="text-xs lg:text-sm">
                  {option.toUpperCase()}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className={`p-2 w-full rounded-sm text-center font-bold mt-10 ${
            isFormFilled
              ? "bg-navy text-snow hover:bg-darkGreen hover:border hover:border-darkGreen"
              : "bg-snow text-navy"
          }`}
          disabled={!isFormFilled || isSubmitting}
        >
          {isSubmitting ? "SUBMITTING..." : "FREE TOOLBOX ACCESS"}
        </button>
      </form>
    </div>
  );
};

export default waitlistForm;
