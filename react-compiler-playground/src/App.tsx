import { useState } from "react";

const sleep = (milliSeconds: number) => {
  const startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milliSeconds);
};

const ComputeIntensive = () => {
  sleep(1000);
  return <div>I'm a very slow component</div>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello Compiler</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <ComputeIntensive />
    </>
  );
}

export default App;
