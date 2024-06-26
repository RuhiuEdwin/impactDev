import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  companySize: string;
  countryOfOperations: string;
  operations: string;
  countries: string;
  sector: string;
  sustainabilityInitiatives: string;
  sustainabilityInitiativesEngaged: string;
};

type TwoProps = {
  onNextStep: () => void;
  closeWaitlistForm: () => void;
  onPreviousStep: () => void;
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
};

const Two: React.FC<TwoProps> = ({
  onNextStep,
  onPreviousStep,
  closeWaitlistForm,
  formData = {
    companySize: "",
    countryOfOperations: "",
    operations: "",
    countries: "",
    sector: "",
    sustainabilityInitiatives: "",
    sustainabilityInitiativesEngaged: "",
  },
  updateFormData,
}) => {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const countriesList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia (formerly Macedonia)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  useEffect(() => {
    // Check if all form fields are filled
    const checkFormFilled = () => {
      const {
        companySize,
        countryOfOperations,
        sustainabilityInitiatives,
        sector,
        operations,
      } = formData;
      return (
        companySize !== "" &&
        countryOfOperations !== "" &&
        sustainabilityInitiatives !== "" &&
        operations !== "" &&
        sector !== ""
      );
    };

    setIsFormFilled(checkFormFilled());
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "countryOfOperations") {
      const filtered = countriesList.filter((country) =>
        country.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredCountries(filtered);
      updateFormData({ [name]: value });
    } else {
      updateFormData({ [name]: value });
    }
  };

  const handleCountryClick = (country: string) => {
    updateFormData({ ...formData, countryOfOperations: country });
    setFilteredCountries([]);
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
          <h4 className="font-bold text-sm">What's your Company Size?</h4>
          <div className="flex flex-col items-start">
            {/* Company size options */}
            {[
              "Micro-sized business: less than 10 employees",
              "Medium business: 50 - 249 employees",
              "Large-sized business: more than 250 employees",
            ].map((option) => (
              <div key={option} className="flex gap-1 items-start">
                <input
                  type="radio"
                  id={option.replace(/\W/g, "-").toLowerCase()}
                  name="companySize"
                  value={option}
                  checked={formData.companySize === option}
                  onChange={handleChange}
                />
                <label className="text-xs lg:text-sm">{option}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h4 className="font-bold text-sm">
            Where is the country of your operations
          </h4>
          <input
            type="text"
            name="countryOfOperations"
            value={formData.countryOfOperations}
            onChange={handleChange}
            placeholder="Country of Operations"
            className="w-full bg-white rounded-sm lg:p-3 pl-2 p-1 text-navy"
          />
          {filteredCountries.length > 0 && (
            <ul className="bg-white absolute z-10 w-3/4 mt-20 border border-gray-300 rounded-sm">
              {filteredCountries.map((country, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-2 hover:bg-gray-100"
                  onClick={() => handleCountryClick(country)}
                >
                  {country}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h4 className="font-bold text-sm">
            Does your organization operate internationally or within specific
            regions/countries?
          </h4>
          <div className="flex flex-col items-start">
            {/* Operations options */}
            {["International", "Locally"].map((option) => (
              <div key={option} className="flex gap-1 items-center">
                <input
                  type="radio"
                  id={option.toLowerCase()}
                  name="operations"
                  value={option}
                  checked={formData.operations === option}
                  onChange={handleChange}
                />
                <label className="text-xs lg:text-sm">{option}</label>
              </div>
            ))}
          </div>
          {formData.operations === "International" && (
            <div className="flex flex-col gap-1 items-start w-full">
              <h4 className=" text-sm">
                Please list countries you operate in.
              </h4>
              <textarea
                rows={4}
                name="countries"
                value={formData.countries}
                onChange={handleChange}
                className="w-full bg-white rounded-sm pl-2 text-navy"
              ></textarea>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h4 className="font-bold text-sm">Which Sector are you in?</h4>
          <div className="flex flex-col items-start">
            {/* Sector options */}
            {[
              "Energy",
              "Agriculture",
              "HealthCare",
              "Development",
              "Other",
            ].map((option) => (
              <div key={option} className="flex gap-1 items-center">
                <input
                  type="radio"
                  id={option.toLowerCase()}
                  name="sector"
                  value={option}
                  checked={formData.sector === option}
                  onChange={handleChange}
                />
                <label className="text-xs lg:text-sm">
                  {option === "Development" ? "Development (NGO)" : option}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h4 className="font-bold text-sm">
            Are you currently engaged in any sustainability initiatives or
            practices?
          </h4>
          <div className="flex flex-col items-start">
            {/* Radio options */}
            {["Yes", "No"].map((option) => (
              <div key={option} className="flex gap-1 items-center">
                <input
                  type="radio"
                  id={option.toLowerCase()}
                  name="sustainabilityInitiatives"
                  value={option}
                  checked={formData.sustainabilityInitiatives == option}
                  onChange={handleChange}
                />
                <label className="text-xs lg:text-sm">{option}</label>
              </div>
            ))}
          </div>
          {formData.sustainabilityInitiatives === "Yes" && (
            <div className="flex flex-col gap-1 items-start w-full">
              <h4 className="font-bold text-sm">
                If yes, please briefly describe your current sustainability
                initiatives.
              </h4>
              <textarea
                rows={4}
                name="sustainabilityInitiativesEngaged"
                value={formData.sustainabilityInitiativesEngaged}
                onChange={handleChange}
                className="w-full bg-white rounded-sm pl-2 text-navy"
              ></textarea>
            </div>
          )}
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

export default Two;
