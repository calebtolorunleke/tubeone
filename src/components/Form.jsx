import React, { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");
  const [name, setName] = useState({ firstName: "", lastName: "" });
  //   const handleChange = (e) => {
  //     console.log("change the code ");
  //     setName({ ...name, firstname: e.target.value, lastname: e.target.value });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstname}
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastname}
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
};

export default Form;
