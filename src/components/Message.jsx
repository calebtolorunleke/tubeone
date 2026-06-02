import React from "react";

const Message = () => {
  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Click here to get a message</button>
    </div>
  );
};

export default Message;
