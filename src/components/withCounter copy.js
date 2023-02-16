import React from "react";
import { useState } from "react";

const withCounter = (OriginalComponent, incrementNumber) => {
  function NewComponent(props) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + incrementNumber);
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
