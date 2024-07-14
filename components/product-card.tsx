import { useState } from "react";
import { Link } from "react-router-dom";

import { updateTaskStatus, removeTask, saveTasks } from "../storage/tasks.tsx";
import { SortByDate } from "../utils/sort-by-date";
import { RandomId } from "../utils/random-id";
import { ExpandButton } from "./ui/expand-button";
import { AddTaskForm } from "./ui/add-task-form";

const todoBackground = "bg-stone-500";
const todoBorder = "border-stone-500";

const progressBackground = "bg-cyan-500";
const progressBorder = "border-cyan-500";

const doneBackground = "bg-green-500";
const doneBorder = "border-green-500";

export function ProductCard({
  title,
  tasks,
  status,
  stateCallback,
}: {
  title: string;
  tasks: any;
  status: any;
  stateCallback: any;
}) {
  let background = todoBackground;
  let border = todoBorder;

  if (status === "progress") {
    background = progressBackground;
    border = progressBorder;
  }

  if (status === "done") {
    background = doneBackground;
    border = doneBorder;
  }

  const filteredList = tasks.filter((task: any) => {
    return task.status === status;
  });

  const [isToggleAdd, setToggleAdd] = useState(false);

  const showAddList = () => {
    setToggleAdd((isToggleAdd: boolean) => !isToggleAdd);
  };

  const [task, setTask] = useState("");

  const handleChange = (event: any) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const submittedTask = task;
    if (
      submittedTask === null ||
      submittedTask === "" ||
      submittedTask === undefined
    ) {
      console.error("WARNING: Empty task not allowed!");
      return;
    }

    const newTaskList = {
      id: RandomId(),
      task: submittedTask[0].toUpperCase() + submittedTask.slice(1),
      status: status,
      created_at: new Date(),
    };
    stateCallback([...tasks, newTaskList]);
    setTask("");
  };

  const [movedList, setMovedList] = useState<string[]>([]);

  const addIntoMovedList = (id: string) => {
    if (movedList.length == 0) {
      setMovedList([id]);
      return;
    }

    if (movedList.includes(id)) {
      const updatedMovedList = movedList.filter((taskId: any) => taskId !== id);
      setMovedList(updatedMovedList);
    } else {
      setMovedList([...movedList, id]);
    }
  };

  const moveTask = (event: any) => {
    event.preventDefault();
    stateCallback(updateTaskStatus(movedList, targetCard));
    setTargetCard("");
    setMovedList([]);
  };

  const deleteTask = (id: string) => {
    stateCallback(removeTask(id));
    saveTasks(removeTask(id));
  };

  const [targetCard, setTargetCard] = useState("");

  const handleTargetCardChange = (event: any) => {
    setTargetCard(event.target.value);
  };

  return (
    <div className="w-full rounded-lg lg:mb-0 bg-slate-50 dark:bg-slate-700">
      <div className="text-center text-slate-500 px-2 py-2 dark:text-slate-400 border-b-1 border-dashed border-slate-100 dark:border-slate-50">
        <img
          src="../src/assets/product-images/dortmund-jersey-home-2023-2024.png"
          alt="BVB Trikot Logo"
          className="w-42"
        />
        <p className="text-md uppercase">BORUSSIA DORTMUND HOME JERSEY</p>
        <h2 className="font-bold text-xl">Rp 150.000</h2>
        <Link to="/detail">
          <button
            type="submit"
            className="mt-2 bg-[#AAAAAA] hover:bg-[#B6B6B6] rounded-lg px-1.5 py-1 text-white text-md"
          >
            <svg
              className="inline w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
              />
            </svg>
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  );
}
