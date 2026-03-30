function Greetings(props) {
  return (
    <div>
      {/* <h2>Hello SD#073!</h2> */}
      <h2>Hello, {props.name}!</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Greetings;
