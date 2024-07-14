import { getTasks } from "../storage/tasks.tsx";
import { Card } from "../components/card.tsx";
import { ProductDetail } from "../components/product-detail.tsx";
import { useState } from "react";

export function Detail() {
  const [task, setTasks] = useState(getTasks());

  return (
    <div className="flex flex-row justify-center items-center">
      <ProductDetail
        title="Dortmund Jersey"
        tasks={task}
        status="todo"
        stateCallback={setTasks}
      />
    </div>
  );
}
