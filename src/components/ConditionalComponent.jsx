// import React from "react";

// import Code from "./Code";
// import Welcome from "./Welcome";

// const ConditionalComponent = () => {
//   const display = true;
//   if (display) {
//     return (
//       <div>
//         <h3>This is a conditional component</h3>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h3>Code everyday!</h3>
//       </div>
//     );
//   }
// };

// export default ConditionalComponent;

// const ConditionalComponent = () => {
//   const display = false;
//   if (display) {
//     return <Welcome />;
//   } else {
//     return <Code />;
//   }
// };

// export default ConditionalComponent;

// element variable to condiitional render jsx  || tenaries and js rendering.

// const ConditionalComponent = () => {
//   //   let messageOne = <h1>This is message 1</h1>;
//   //   let messageTwo = <h1>This is message two</h1>;
//   const display = false;
//   let message;
//   if (display) {
//     // return messageOne;
//     message = <h1>This is message 1</h1>;
//   } else {
//     // return messageTwo;
//     message = <h1>This is message two</h1>;
//   }
//   return message;
// };

// export default ConditionalComponent;

// const ConditionalComponent = () => {
//   const display = true;

//   return display ? <h1>Message 1</h1> : <h1>Message 2</h1>;
// };
// export default ConditionalComponent;

import Welcome from "./Welcome";
import Code from "./Code";

const ConditionalComponent = () => {
  const display = false;
  return display ? <Welcome /> : <Code />;
};

export default ConditionalComponent;
