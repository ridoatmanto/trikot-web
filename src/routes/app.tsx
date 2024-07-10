import { getTasks } from "../storage/tasks.tsx";
import { Card } from "../components/card.tsx";
import { useState } from "react";

export default function App() {
  const [task, setTasks] = useState(getTasks());

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-0 min-h-72">
      <div className="mr-0 lg:mr-4 mb-4">
        <Card
          title="Todo List"
          tasks={task}
          status="todo"
          stateCallback={setTasks}
        />
      </div>

      <div className="mr-0 lg:mr-4 mb-4">
        <Card
          title="In Progress"
          tasks={task}
          status="progress"
          stateCallback={setTasks}
        />
      </div>

      <div className="mr-0 mb-4">
        <Card
          title="Done"
          tasks={task}
          status="done"
          stateCallback={setTasks}
        />
      </div>
    </div>
  );
}
