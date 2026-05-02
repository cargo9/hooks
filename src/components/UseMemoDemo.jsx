import React from "react";
import { useMemo, useState } from "react";

const starterTasks = [
  "Learn the hook signature",
  "See which state changes trigger a render",
  "Persist one small preference in localStorage",
  "Measure a value without forcing a re-render",
];

function UseMemoDemo() {
  const [search, setSearch] = useState("");

  const filteredTasks = useMemo(() => {
    const normalizerQuery = search.trim().toLowerCase();

    return starterTasks.filter((task) =>
      task.toLowerCase().includes(normalizerQuery),
    );
  }, [search]);

  return (
    <article className="card">
      <span className="chip">useMemo</span>
      <h2>Derived task List</h2>
      <p>Filtering is performed efficiently using useMemo.</p>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search tasks"
      />

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </article>
  );
}
export default UseMemoDemo;
