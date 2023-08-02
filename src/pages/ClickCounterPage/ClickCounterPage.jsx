import ClickCounter from "components/ClickCounter/ClickCounter";
import { useEffect, useState } from "react";

export default function ClickCounterPage(props) {
  const [counterStart, setCounterStart] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounterStart((Math.random() * 50) << 0);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <ClickCounter start={counterStart} />
    </>
  );
}
