import { useEffect } from "react";

// global variable
const Demo2 = () => {
  useEffect(() => {
    setInterval(() => {
      console.log("set global variable");
      //   avoid to use global variable
      window.customArray = [
        ...(window?.customArray ?? []),
        ...Array(10000).fill("Wow"),
      ];
    }, 2000);

    return () => {
      // in case that have to use, must clear after no longer used
      window.customArray = [];
    };
  }, []);

  return (
    <div className="demo">
      <h1>set global variable</h1>
    </div>
  );
};

export default Demo2;
