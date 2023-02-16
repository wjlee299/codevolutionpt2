import React from "react";
import { useState } from "react";

const withCounter = (OriginalComponent) => {
  function NewComponent(props) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };
    return <OriginalComponent
      count={count}
      incrementCount={incrementCount}
      {...props}
    />;
  }
  return NewComponent;
};

export default withCounter;
