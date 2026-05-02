import React from "react";
import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [secondsOnline, setSecondsOnline] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setSecondsOnline((currentSeconds) => currentSeconds + 1);
    }, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  useEffect(() => {
    document.title = `Hook timer: ${secondsOnline} seconds`;

    return () => {
      document.title = "React hooks demo";
    };
  }, [secondsOnline]);

  return (
    <article className="card">
      <span className="chip">useEffect</span>
      <h2>Side effects</h2>
      <p>
        This component demonstrates how to use the useEffect hook to run side
        effects in a React component.
      </p>
      <div className="stat-list">
        <div>
          <span>Seconds Online</span>
          <strong>{secondsOnline}</strong>
        </div>
        <div>
          <span>Browser title</span>
          <strong>{`Hook timer: ${secondsOnline} seconds`}</strong>
        </div>
      </div>
    </article>
  );
}
export default UseEffectDemo;
