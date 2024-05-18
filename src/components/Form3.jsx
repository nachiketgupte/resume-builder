import React from "react";
import { useState } from "react";

function Form3({ onSubmit }) {
  const [schools, setSchools] = useState([
    { name: "", dateFrom: "", dateTo: "" ,course: "", description: "" },
  ]);

  const handleSchoolChange = (index, event) => {
    const { name, value } = event.target;
    const newSchools = [...schools];
    newSchools[index][name] = value;
    setSchools(newSchools);
  };

  const handleAddSchool = () => {
    setSchools([...schools, {name:'', dateFrom: '', dateTo: '', course: '', description: ''}]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    schools.forEach(school => {
      school.description = school.description.split('\n');
    });
    console.log(schools);
    onSubmit(schools);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <h2>Enter Education Details</h2>
        {schools.map((school, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              value={school.name}
              onChange={(e) => handleSchoolChange(index, e)}
              placeholder="School Name"
            />
            <input
              type="text"
              name="dateFrom"
              value={school.dateFrom}
              onChange={(e) => handleSchoolChange(index, e)}
              placeholder="Date From"
            />
            <input
              type="text"
              name="dateTo"
              value={school.dateTo}
              onChange={(e) => handleSchoolChange(index, e)}
              placeholder="Date To"
            />
            <input
              type="text"
              name="course"
              value={school.course}
              onChange={(e) => handleSchoolChange(index, e)}
              placeholder="Course Name"
            />
            <textarea
              name="description"
              value={school.description}
              onChange={(e) => handleSchoolChange(index, e)}
              placeholder="Enter Description"
            />
          </div>
        ))}
        <button type="button" onClick={handleAddSchool}>Add Another Education</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form3;
