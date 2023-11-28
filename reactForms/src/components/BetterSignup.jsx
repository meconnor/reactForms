import { useState } from "react";

export default function BetterSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (event) => {
    const changedField = event.target.name;
    const newValue = event.target.value;
    setFormData((currData) => {
      return { ...currData, [changedField]: newValue };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="First name"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        id="firstname"
      />
      <button onClick={handleSubmit}>Submit</button>
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="Last name"
        value={formData.lastName}
        onChange={handleChange}
        name="lastName"
        id="lastname"
      />
      <button onClick={handleSubmit}>Submit</button>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        id="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
