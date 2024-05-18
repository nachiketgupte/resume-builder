import React from "react";
import { useState } from "react";

function Form4({ onSubmit }) {
  const [experience, setExperience] = useState([
    { companyName: "", dateFrom: "", dateTo: "", role: "", description: "" },
  ]);

  const handleComapnyChange = (index, event) => {
    const { name, value } = event.target;
    const newExperience = [...experience];
    newExperience[index][name] = value;
    setExperience(newExperience);
  };

  const handleAddCompany = () => {
    setExperience([...experience, {companyName:'', dateFrom: '', dateTo: '', role: '', description: ''}]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedExperience = experience.map((exp) => {
      if (typeof exp.description === 'string') {
        return { ...exp, description: exp.description.split('\n') };
      }
      return exp;
    });
    onSubmit(updatedExperience);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <h2>Enter Your Work Experience Details</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <input
              type="text"
              name="companyName"
              value={exp.companyName}
              onChange={(e) => handleComapnyChange(index, e)}
              placeholder="Company Name"
            />
            <input
              type="text"
              name="dateFrom"
              value={exp.dateFrom}
              onChange={(e) => handleComapnyChange(index, e)}
              placeholder="Date From"
            />
            <input
              type="text"
              name="dateTo"
              value={exp.dateTo}
              onChange={(e) => handleComapnyChange(index, e)}
              placeholder="Date To"
            />
            <input
              type="text"
              name="role"
              value={exp.course}
              onChange={(e) => handleComapnyChange(index, e)}
              placeholder="Role"
            />
            <textarea
              name="description"
              value={exp.description}
              onChange={(e) => handleComapnyChange(index, e)}
              placeholder="Enter Description"
            />
          </div>
        ))}
        <button type="button" onClick={handleAddCompany}>Add Another Experience</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form4;
