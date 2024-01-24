import React from "react";

function Child(props) {
  return (
    <div>
      console.log("Render from child")
      <h4>Child components with no props</h4>
      <button onClick={props.handleCount}>Increase Count</button>
    </div>
  );
}

export default React.memo(Child); // Treate like HOC
// react is add additional step to component render
// react check to props changes or not
// to changes in props to component re-render,, otherwise not render
