import React from "react";
import Counter from "./components/Counter";
import CounterContainer from "./components/CounterContainer";

const App = () => {
  return (
    <div className="container rounded-lg mx-auto bg-gray-100 shadow-sm my-8 p-8">
      <div className="text-center ">
        <h2 className="text-2xl font-bold">Counter GODZ</h2>
        <p className="text-slate-600">By Indigoscipio</p>
      </div>

      <CounterContainer />
    </div>
  );
};

export default App;
