import { useEffect, useRef, useState } from "react";

let timerAttempt = 0;

// timer
const Demo4 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      timerAttempt++;
      console.log("This should be run every 2 seconds! --> " + timerAttempt);
    }, 2000);

    // timer must be clear inside clean up function
    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div className="demo">
      <button onClick={() => setCount((curr) => curr + 1)}>re-render</button>
      <h1>Re-render count:</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default Demo4;
