import { useEffect, useRef, useState } from "react";

let rerenderAnount = 0;

// event listener
const Demo3 = () => {
  rerenderAnount++;
  const [count, setCount] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      console.log("Click event ");
    };

    if (divRef.current) {
      divRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (divRef.current) {
        // must remove event listener to prevent duplicated event listener
        divRef.current.removeEventListener("click", handleClick);
      }
    };
  }, [count, divRef.current]);

  return (
    <div className="demo">
      <div
        ref={divRef}
        style={{ padding: 10, backgroundColor: "red", marginBottom: 20 }}
      >
        Click me to see how many event on me!
      </div>
      <button onClick={() => setCount((curr) => curr + 1)}>re-render</button>
      <h1>Re-render count:</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default Demo3;
