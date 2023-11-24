import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import counterSlice, {
  decrement,
  increment,
  set,
} from "../features/counter/counterSlice";

const Counter = ({ index }) => {
  const [inputValue, setInputValue] = useState(0);
  const [counterTitle, setCounterTitle] = useState(`Counter ${index + 1}`);
  const counterValue = useSelector((state) => state.counter.values[index]);
  const dispatch = useDispatch();

  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-yellow-500",
  ];

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md text-center">
      <h3 className="text-2xl font-semibold mb-4">{counterValue}</h3>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(decrement({ index }))}
        >
          Decrease -
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(increment({ index }))}
        >
          Increase +
        </button>
      </div>
      <div className="mt-4">
        <input
          className="border p-2 rounded"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="number"
        />
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 ml-2 rounded"
          onClick={() => dispatch(set({ index, value: parseInt(inputValue) }))}
        >
          Set Counter
        </button>
      </div>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-4 rounded"
        onClick={() => dispatch(set({ index, value: 0 }))}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
