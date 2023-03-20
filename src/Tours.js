import React, { useState } from "react";

const Tours = (props) => {
  const [readmore, setReadmore] = useState(false);

  return (
    <>
      <div className="container">
        <img src={props.image}></img>
        <h3>{props.name}</h3>
        <p>
          {readmore ? props.info : `${props.info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadmore(!readmore);
            }}
          >
            {readmore ? "Show less" : "Read more"}
          </button>
        </p>

        <button onClick={() => props.removeTour(props.id)}>
          Not Interested
        </button>
      </div>
    </>
  );
};

export default Tours;
