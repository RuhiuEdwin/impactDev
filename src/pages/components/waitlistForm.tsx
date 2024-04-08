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
  formData = {
    fullName: "",
    emailAddress: "",
    companyName: "",
    helpType: [],
  },
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
    const fullName = formData.fullName;
    const email = formData.emailAddress;
    const company = formData.companyName;  
    const GOOGLE_SHEET_ID = "1Jxtsu-Mksm4rlg7N3-ZkEytw8WGyXaLOD3AOD4ief40";
    const GOOGLE_CLIENT_EMAIL =
      "180816147719-compute@developer.gserviceaccount.com";
    const GOOGLE_PRIVATE_KEY =
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQD5vSt37/EZWWgI\nuiCXNTHFgDtdvsJzZX37e4jHo61v8KdGh9cLoAP1NaLiATZPVSdX2JEq4WPdBWt9\nhernj1lMdjCOAbW8s8OS1WiggsXVIXxeV0tdzzDFfeFKNU5O7VTVwHls89jbQdCT\nnDI/Ju1tsU1hkmShNdy8XvgXvkkyPyBBzQVZrrvERkv0qQpRzE7fpCRCwKhaA5Z0\nHQwda7+rrOKZJW7Vv53lvV9S1kS/AE1hLU7gCJrV94eu4dDRXYMHgi3vRWFWNgwM\nUDqUd1XRbpSR7ZF4bImeXApaIzeHA13p6uyASreQOGCmrmmjCKGY6V8n+0JdhMEn\nKI6KujRhAgMBAAECggEAA4MHvLQc0j6vMhTjTEUKT2JDfh4RMBwQrAvmFeqaZS0q\nPllpf9IZpCXY2xqUbS6qcuI1KQ101kuTIfd+C2YOZdRxT9nnI0FtjLUgDMZx/5KC\nOXW69gApydPV6nF6nwJYM6Of1tVMqslPjyJ+lA6ZKaD5Oy1FaX1EqUh2RCff8csp\nguKpAY7OqKa1z8FrogBiIgKk/ZC/lXRkFhkxej5xp+UML5a2Jq6SLlAscm3vKgiC\n9ULpO4EYfBtqPsnrbEvG9PI/WNQAooL7aN612YlRg4TBd21IfPYxfD7XLhYk13BH\n5AgvY3bp35PxrR36HQmosoQFcHwhvEssa/0gPARQTQKBgQD9az3ou57tRImUx+FK\nuzhapOawbXh+yXe4J6n7Z7TZ793oflz+ypkdQMOIWjSiYM2YJec+DY9I/xcx/GCR\nP3e/TAq7iNvFyaKaawuceHxzw/pv1IbZV/TW4dVpMcuN/sx8Nk+Ov1vfwPm4aCOG\n0AuYAP5bdvV2c2bPNSA/kXNOlQKBgQD8SFU5ZmUeTbnyswwFeOWhkoMGd6A5bzgs\nxnUUzSmgWxtSWvqyL3puV8rwGuau/jLNjed1kKn7I1FLYsgd4AmqzwRFTw0X1HFk\nGyKTEX5Ik5ge2w39wldlwuTRjvCCUZKqtNANIcWpEzCyjTSAQOQ/3+VJOmO93GRZ\nd5AysV03nQKBgDvfppTiHz53vvnD79q0OTBRXZ+5fYqXFw4PcP3RFs2W+pr/oAEi\n5OIgdxI0HdNvg6O68NOcaIoamuRYeIhYsnYkBTUhtKsaZKyPNgMWBHFlkDnzwJiB\nS3uph75+4VT/Klj+i/VyCMbo1RdYo2wqo1KaiX4asQv3YAb8yk26k7+xAoGAPQx3\n6xr3Lz0Z2TwwlYZq8w1UPZVnJV7flh40KON4xkAlvWkcr0/D7b268x1fY0tKGenT\n7+Qg7g/e1UJDMM+NJ1NPMkJt5a1X/yR92l7qUz+8GQNjQFvt8EcYPgm7850vw7Vb\nf0ID5eUp7Js08DBDy50vi+fgSQpzEh9Xupym9RUCgYBgwn8IgH9WGKQTTt833Gby\nebm2f40HFgOAjPPVCSfQQDgwo8yA+sjm5fhPegoDxwTlav22UDR4kiV7Eo6kr8kr\nDMlkaCwwWk0VVJPJcx5nNNxcY1WmYygS1oi2koWpS0DWB4fsC2aOM1iOh0YmJclX\nOy3F8jjW7OhkZYFfJIs1rA==\n-----END PRIVATE KEY-----\n";
    
    let form = {
      fullName,
      email,
      company,
      GOOGLE_SHEET_ID,
      GOOGLE_CLIENT_EMAIL,
      GOOGLE_PRIVATE_KEY,
    };
    console.log(form);


    const rawResponse = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const content = await rawResponse.json();
    console.log(content);
    setIsSubmitting(false);
    // Perform any additional actions after successful submission
    onNextStep();
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
