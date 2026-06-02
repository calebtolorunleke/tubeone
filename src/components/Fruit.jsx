import React from "react";

const Fruit = ({ name, price, emoji, soldout }) => {
  //   const fruits = [
  //     {
  //       name: "apple",
  //       price: 10,
  //       emoji: "🍎",
  //     },
  //     {
  //       name: "mango",
  //       price: 7,
  //       emoji: "🥭",
  //     },
  //     {
  //       name: "banana",
  //       price: 2,
  //       emoji: "🍌",
  //     },
  //     {
  //       name: "orange",
  //       price: 5,
  //       emoji: "🍊",
  //     },
  //     {
  //       name: "pine apple",
  //       price: 8,
  //       emoji: "🍍",
  //     },
  //   ];

  //   return (
  //     <>
  //       {/* {name} {emoji} {price} */}
  //       {price > 5 ? (
  //         <li>
  //           {name} {emoji} {price}
  //         </li>
  //       ) : (
  //         ""
  //       )}
  //     </>
  //   );
  // };

  // export default Fruit;

  return (
    <>
      {/* {name} {emoji} {price} */}
      {price > 5 ? (
        <li>
          {name} {emoji} {price} {soldout ? "Soldout" : ""}
        </li>
      ) : (
        ""
      )}
    </>
  );
};

export default Fruit;
