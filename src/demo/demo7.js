import React, { useEffect, useState } from "react";

const getDog = async (signal) => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random", {
      signal,
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error("Fetch error:", error);
    }
  }
};

const Dog = ({ message }) => {
  const [, , , , breed] = message.split("/");

  return (
    <div className="dog">
      <img src={message} />
      <h3>{breed}</h3>
    </div>
  );
};

const OtherPage = () => {
  return (
    <>
      <h3>Other page!</h3>
      <h4>just display something </h4>
    </>
  );
};

const RandomDog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const loadData = async () => {
      setLoading(true);
      try {
        const [dog1, dog2, dog3, dog4, dog5] = await Promise.all([
          getDog(abortController.signal),
          getDog(abortController.signal),
          getDog(abortController.signal),
          getDog(abortController.signal),
          getDog(abortController.signal),
        ]);
        setData([dog1, dog2, dog3, dog4, dog5]);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    loadData();

    return () => {
      // better to cancel request if no need for the response
      abortController.abort();
    };
  }, []);

  return (
    <>
      <h2>Random dog!</h2>
      <div>
        {loading
          ? "Loading...."
          : data.map((dog) => <Dog key={dog.message} {...dog} />)}
      </div>
    </>
  );
};

const PageMapping = {
  1: <RandomDog />,
  2: <OtherPage />,
};

// Fetch API!
const Demo7 = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="demo">
      <div>
        <button onClick={() => setPage(1)}>Page 1</button>
        <button onClick={() => setPage(2)}>Page 2</button>
      </div>
      <h4>{`Page ${page}`}</h4>
      {PageMapping[page]}
    </div>
  );
};

export default Demo7;
