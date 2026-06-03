import React, { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");
  const [name, setName] = useState({ firstname: "", lastname: "" });
  const handleChange = (e) => {
    console.log("change the code ");
    setName({ firstname: e.target.value, lastname: e.target.value });
  };
  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" value={name.firstname} />
        <input onChange={handleChange} type="text" value={name.lastname} />
      </form>
    </div>
  );
};

export default Form;
