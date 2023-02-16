import React from "react";
import withCounter from "./withCounter";

function HoverCounter({count, incrementCount}) {

  return (
    <>
      <label>Hover Counter : </label>
      <button onMouseOver={incrementCount}>Hovered {count} times</button>
    </>
  );
}

export default withCounter(HoverCounter);
