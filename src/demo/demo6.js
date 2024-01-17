import { useEffect, useRef, useState } from "react";

async function getSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 4000);
  });
}

// Set state to component that not exist!
export default function Demo6() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="demo">
      <button onClick={() => setToggle((curr) => !curr)}>Toggle</button>
      {toggle ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

const ComponentA = () => {
  const [aState, setAState] = useState(1);
  const isUnmounted = useRef(false);

  useEffect(() => {
    const getData = async () => {
      const res = await getSomething();
      console.log("got response is: ", res);
      // use flag to prevent set state after unmounted
      if (!isUnmounted.current)
        setAState((curr) => {
          console.log("Call setState!!");
          return curr + 1;
        });
    };

    getData();

    return () => {
      // add flag to track unmounted state
      isUnmounted.current = true;
      console.log("Component A is already unmounted");
    };
  }, []);

  return <div>I am Component A</div>;
};

const ComponentB = () => {
  return <div>I am Component B</div>;
};
