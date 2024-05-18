import ResumePreview from "./components/ResumePreview";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Form4 from "./components/Form4";
import { useState } from "react";
function App() {
  const [currentForm, setCurrentForm] = useState(0);
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phoneNo: "",
    city: "",
    state: "",
    schools: [],
    experience: [],
  });

  const handleFormSubmit = (data) => {
    console.log("form submitted");
    setFormData((prevData) => ({ ...prevData, ...data }));
    if(currentForm !== forms.length -1) {
      setCurrentForm(currentForm + 1);
    }
  };

  const moveFormBack = () => {
    if(currentForm !== 0) {
      setCurrentForm(currentForm -1);
    }
  }

  const forms = [
    <Form1 onSubmit={(fName, lName) => handleFormSubmit({ fName, lName })} />,
    <Form2
      onSubmit={(email, phoneNo, city, state) =>
        handleFormSubmit({ email, phoneNo, city, state })
      }
    />,
    <Form3 onSubmit={(schools) => handleFormSubmit({ schools })} />,
    <Form4 onSubmit={(experience) => handleFormSubmit({ experience })} />,
  ];

  return (
    <div className="App">
      <div className="form-container">
        {forms[currentForm]}
        <button onClick={moveFormBack} className="round-button"> &larr; </button>
      </div>
      <ResumePreview {...formData} />
    </div>
  );
}

export default App;
