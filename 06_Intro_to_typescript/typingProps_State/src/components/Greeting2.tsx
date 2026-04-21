const Greeting2 = ({ name }: { name: string }) => {
  return (
    <div>
      <h2>Hey, {name.toUpperCase()!}</h2>
    </div>
  );
};

export default Greeting2;
