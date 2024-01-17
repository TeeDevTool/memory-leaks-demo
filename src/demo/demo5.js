import { useEffect, useState } from "react";

// infinite loop
const Demo5 = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState((curr) => [...curr, "added"]);
    // must avoid to put value that can be change inside this useEffect in array dependency
  }, [state]);

  return (
    <div className="demo">
      <button onClick={() => setState([])}>Reset</button>
      {state.map((row, index) => (
        <MockComponent init={`${row} ----> ${index + 1}`} />
      ))}
    </div>
  );
};

const MockComponent = ({ init }) => {
  const [state, setState] = useState(init);

  useEffect(() => {
    setState(init);
  }, [init]);

  return <h4>{state}</h4>;
};

export default Demo5;
