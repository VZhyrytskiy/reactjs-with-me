import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log('Increment function executed!');
    // doesn't work as expected
    // setCount(count + 1);
    // setCount(count + 1);

    // works as expected
    setCount(prevValue => prevValue + 1);
    setCount(prevValue => prevValue + 1);
  };

  return (
    <div className="p-4 bg-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Counter</h1>
      <p className="text-lg mb-4">
        Current value: <span className="font-mono">{count}</span>
      </p>
      <button
        onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;