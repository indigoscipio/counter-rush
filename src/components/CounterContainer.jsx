import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCounters } from "../features/counter/counterSlice";
import Counter from "./Counter";

const CounterContainer = () => {
  const [numCounters, setNumCounters] = useState(1);
  const counters = useSelector((state) => state.counter.values);

  const dispatch = useDispatch();

  const handleNumCountersChange = (e) => {
    const newNumCounters = parseInt(e.target.value, 10);

    if (newNumCounters > 10) {
      window.alert("Number exceeds limit!");
    } else {
      setNumCounters(newNumCounters);
      dispatch(setCounters(newNumCounters));
    }
  };

  return (
    <div className="text-center my-8">
      <label className="block text-sm font-semibold mb-2" htmlFor="">
        Please set the number of counters (Max 10!)
      </label>
      <input
        className="my-4 mx-auto block w-24 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
        min="1"
        max="10"
        onChange={handleNumCountersChange}
        type="number"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {counters.map((_, index) => (
          <Counter key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CounterContainer;
