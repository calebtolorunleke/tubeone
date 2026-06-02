import React from "react";

const Fruit = ({ name, price, emoji }) => {
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

  return (
    <div>
      <li>
        {name} {emoji} {price}
      </li>
    </div>
  );
};

export default Fruit;
