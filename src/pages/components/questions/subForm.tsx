import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  let form = {
    fullName,
    email,
    company,
  };

  const rawResponse = await fetch("/api/subscribe", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  const content = await rawResponse.json();
  // print to screen
  console.log(content);
  setEmail("");
  setFullName("");
  setCompany("");
};

  return (
    <form onSubmit={handleSubmit}>
      <div className="mergeTable">
        <div className="mergeRow dojoDndItem mergeRow-email">
          <label htmlFor="email">
            Email Address <span className="req asterisk">*</span>
          </label>
          <div className="field-group">
            <input
              type="email"
              name="MERGE0"
              id="MERGE0"
              size={25}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mergeRow dojoDndItem mergeRow-text">
          <label htmlFor="fullName">Full Names</label>
          <div className="field-group">
            <input
              type="text"
              name="MERGE1"
              id="MERGE1"
              size={25}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </div>
        <div className="mergeRow dojoDndItem mergeRow-text">
          <label htmlFor="company">Company</label>
          <div className="field-group">
            <input
              type="text"
              name="MERGE2"
              id="MERGE2"
              size={25}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="submit_container clear">
        <input
          type="submit"
          className="formEmailButton"
          name="submit"
          value="Subscribe"
        />
      </div>
    </form>
  );
};

export default Subscribe;
