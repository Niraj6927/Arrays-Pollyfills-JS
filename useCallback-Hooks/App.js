import React, { useState } from 'react'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0);

  // purpose of useCallback : useCallback Hook returns a memoized callback function.
  // catch the function between different render cycle
  // use the useCallback hook to prevent the function from being recreated unless necessary.
  const handleCount = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);
  return (
    <div>
      <h1>Performance optimisation in ReactJS {count} </h1>
      <Child handleCount={handleCount} />
    </div>
  );
}

export default App
