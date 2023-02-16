import React from "react";
import withCounter from "./withCounter";

function ClickCounter({count, incrementCount}) {

  return (
    <>
      <label>Click Counter : </label>
      <button onClick={incrementCount}>Clicked {count} times</button>
    </>
  );
}

export default withCounter(ClickCounter);
