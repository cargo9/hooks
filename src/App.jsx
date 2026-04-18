import React from "react";
// import CustomHookDemo from "./components/CustomHookDemo.jsx";
// import UseEffectDemo from "./components/UseEffectDemo.jsx";
// import UseMemoDemo from "./components/UseMemoDemo.jsx";
// import UseRefDemo from "./components/UseRefDemo.jsx";
import UseStateDemo from "./components/UseStateDemo.jsx";

function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        {/*
          Це верхня частина сторінки.
          Вона не містить логіки hook-ів, а тільки пояснює, що саме учень бачить далі.
        */}
        <p className="eyebrow">Minimal Vite + React demo</p>
        <h1>Hooks, split into components.</h1>
        <p className="lead">
          Each hook example now lives in its own JSX component, so the project
          looks more like a real React app with separated responsibilities.
        </p>
      </section>

      <section className="demo-grid">
        {/*
          Кожен hook винесений в окремий компонент.
          Це схоже на реальні React-проєкти: одна частина інтерфейсу = один файл.
        */}
        <UseStateDemo />
        {/* <UseEffectDemo />
        <UseMemoDemo />
        <UseRefDemo />
        <CustomHookDemo /> */}
      </section>
    </main>
  );
}

export default App;
