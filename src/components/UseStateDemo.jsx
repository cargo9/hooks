import React from "react";
import { useState } from "react";

function UseStateDemo() {
  // useState створює "змінну стану" всередині компонента.
  // count зберігає число, а setCount змінює це число і просить React перемалювати UI.
  const [count, setCount] = useState(0);

  return (
    <article className="card accent-card">
      <span className="chip">useState</span>
      <h2>Counter state</h2>
      <p>
        The count value lives in component state and updates the UI immediately.
      </p>

      {/*
        Тут ми просто показуємо поточне значення state на екрані.
        Коли count зміниться, цей текст автоматично оновиться.
      */}
      <div className="metric">{count}</div>

      {/*
        setCount можна викликати з новим значенням.
        Тут ми передаємо функцію, щоб React взяв саме актуальне попереднє значення.
        Це безпечний підхід, коли новий стан залежить від старого.
      */}
      <div className="button-row">
        <button onClick={() => setCount((currentCount) => currentCount - 1)}>
          - 
        </button>
        <button onClick={() => setCount((currentCount) => currentCount + 1)}>
          + 
        </button>
      </div>
    </article>
  );
}

export default UseStateDemo;
