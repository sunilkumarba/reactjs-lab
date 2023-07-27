import { useState, useEffect } from "react";

export default function useCounter(step = 1) {
  const [counter, setCounter] = useState(0);

  if (step === 0) step = 1;

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCounter((prev) => prev + step);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return counter;
}
