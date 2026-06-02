import Fruit from "./Fruit";

const Fruits = () => {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange"];
  const fruits = [
    {
      name: "apple",
      price: 10,
      emoji: "🍎",
      soldout: true,
    },
    {
      name: "mango",
      price: 7,
      emoji: "🥭",
      soldout: false,
    },
    {
      name: "banana",
      price: 2,
      emoji: "🍌",
      soldout: true,
    },
    {
      name: "orange",
      price: 5,
      emoji: "🍊",
      soldout: false,
    },
    {
      name: "pine apple",
      price: 8,
      emoji: "🍍",
      soldout: true,
    },
  ];
  return (
    <ul>
      {/* <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.emoji} {fruit.name} ${fruit.price}
          </li>
        ))}
      </ul> */}

      {fruits.map((fruit) => (
        // <li key={fruit.name}>
        //   {fruit.emoji} {fruit.name}{" "}
        // </li>
        <Fruit
          key={fruit.name}
          name={fruit.name}
          emoji={fruit.emoji}
          price={fruit.price}
          soldout={fruit.soldout}
        />
      ))}
    </ul>
  );
};

export default Fruits;
