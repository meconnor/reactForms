import { useState } from "react";
//old version not optimized
export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const updateLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = () => {
    console.log(firstName, lastName);
  };
  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={updateFirstName}
        id="firstname"
      />
      <button onClick={handleSubmit}>Submit</button>
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={updateLastName}
        id="lastname"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
