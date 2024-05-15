import ResumePreview from "./components/ResumePreview";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
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
    schools: []
  });

  const handleFormSubmit = (data) => {
    console.log('form submitted');
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentForm(currentForm + 1);
  };

  const forms = [
    <Form1 onSubmit={(fName, lName) => handleFormSubmit({ fName, lName })}></Form1>,
    <Form2 onSubmit={(email, phoneNo, city, state) => handleFormSubmit({ email, phoneNo, city, state })}></Form2>,
    <Form3 onSubmit={(schools) => handleFormSubmit({ schools })}/>
  ];

  return (
    <div className="App">
      {forms[currentForm]}
      <ResumePreview {...formData} />
    </div>
  );
}

export default App;
