import { type Task, dataTasks } from "../data/tasks";

const storageKey = "tasks";

export const initTasks = () => {
  if (!localStorage.getItem(storageKey)) {
    set(dataTasks);
  }
};

export const getTasks = () => {
  initTasks();

  return JSON.parse(localStorage.getItem(storageKey) || "[]");
};

export const saveTasks = (newTasks: Task[]) => {
  set(newTasks);
};

export const removeTask = (taskId: string) => {
  const remainingTasks = getTasks().filter((task: Task) => task.id !== taskId);
  set(remainingTasks);
  saveTasks(remainingTasks);
  return remainingTasks;
};

export const updateTaskStatus = (taskIds: string[], targetCard: string) => {
  const newList = getTasks().map((task: any) => {
    if (taskIds.includes(task.id)) {
      task.status = targetCard;
      task.created_at = new Date();
    }

    return task;
  });

  set(newList);
  return newList;
};

export const set = (newTasks: any) => {
  localStorage.setItem(storageKey, JSON.stringify(newTasks));
};
