import React, { useMemo, useState } from 'react'

function Memo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const IncrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const IncrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  // useMemo Hook returns a memoized value.
  // useMemo Hook only runs when one of its dependencies update.

  const isEven = useMemo(() => {
    console.warn("..........");
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  // const isEven = ()=>{
  //     console.warn("..........")
  //     let i = 0;
  //     while(i < 2000000000) i++;
  //     return counterOne%2 ===0
  // }
  return (
    <div>
      <button onClick={IncrementOne}>CounterOne</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      // using useMemo no dependencies in 2nd button
      <button onClick={IncrementTwo}>CounterTwo</button>
    </div>
  );
}

export default Memo