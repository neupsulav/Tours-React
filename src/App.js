import React, { useEffect, useState } from "react";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch(url);
      const apiData = await response.json();
      setLoading(false);
      setData(apiData);
    } catch (error) {
      setLoading(true);
      console.log("data fetching failed");
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const notInterested = (id) => {
    const newData = data.filter((tour) => tour.id !== id);
    setData(newData);
  };

  if (loading) {
    return <main>Loading...</main>;
  }

  if (data.length == 0) {
    return (
      <>
        <h1>No more tours left</h1>
        <button onClick={fetchApi}>Refresh</button>
      </>
    );
  }

  return (
    <>
      <main>
        <h1>Our Tours</h1>
        {data.map((datas) => {
          return (
            <Tours
              image={datas.image}
              name={datas.name}
              info={datas.info}
              key={datas.id}
              id={datas.id}
              removeTour={notInterested}
            />
          );
        })}
      </main>
    </>
  );
};

export default App;
