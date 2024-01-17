import { useEffect, useState } from "react";

// event listener
const Demo1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setCount((currCount) => currCount + 1);
      console.log("Window resized");
    };

    window.addEventListener("resize", handleResize);

    // must remove event listener to prevent duplicated event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [count]);

  return (
    <div className="demo">
      <h1>Re-render count:</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default Demo1;
