const Hello = ({ person }) => {
  return (
    <div>
      <h1>
        {person.name} {person.seatNumbers}
      </h1>
    </div>
  );
};

export default Hello;
