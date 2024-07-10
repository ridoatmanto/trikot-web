import { useState } from "react";

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

export function Card({
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
    <div
      className={
        "w-full rounded-lg lg:mb-0 border-2 bg-slate-50 dark:bg-slate-700 " +
        border
      }
    >
      <h2
        className={
          "py-1 mb-2 text-white text-lg text-center tracking-wider " +
          background
        }
      >
        {title}
      </h2>
      <div className="text-slate-500 px-2 dark:text-slate-400 border-b-1 border-dashed border-slate-100 dark:border-slate-50">
        <ul>
          {SortByDate(filteredList).map((task: any) => (
            <li className="text-sm" key={task.id}>
              <input
                type="checkbox"
                id={"check-" + task.id}
                name={task.id}
              ></input>{" "}
              <label
                onClick={() => addIntoMovedList(task.id)}
                htmlFor={"check-" + task.id}
              >
                {" "}
                <span className="pb-2 inline-block">{task.task}</span>{" "}
              </label>
              <svg
                className="w-4 h-4 hover:w-6 hover:h-6 text-slate-500 dark:text-slate-400 inline-block"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                onClick={() => deleteTask(task.id)}
              >
                <path
                  fillRule="evenodd"
                  d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
      {movedList.length > 0 && (
        <div
          className={
            "text-xs pb-2 pr-2 mt-2 border-b-2 border-dotted " + border
          }
        >
          <form onSubmit={moveTask} method="post" id="move-form">
            <div className="text-right">
              <span className="inline dark:text-slate-400">
                Move selected to{" "}
              </span>
              <select
                value={targetCard}
                onChange={handleTargetCardChange}
                className="pl-2 py-1 mr-2 inline text-slate-500 dark:text-slate-400 text-xs"
              >
                <option value="" defaultValue="">
                  Choose
                </option>
                {status !== "todo" && <option value="todo">Todo</option>}
                {status !== "progress" && (
                  <option value="progress">In Progress</option>
                )}
                {status !== "done" && <option value="done">Done</option>}
              </select>
              <button
                type="submit"
                className="inline bg-slate-500 hover:bg-slate-400 text-slate-100 py-1 px-2"
              >
                Move
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="py-2 px-2">
        <ExpandButton toggleState={isToggleAdd} clickAction={showAddList} />
        {isToggleAdd === true && (
          <AddTaskForm
            currentValue={task}
            changeInputHandle={handleChange}
            submitAction={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
