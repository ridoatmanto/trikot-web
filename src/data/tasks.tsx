export type Task = {
  id: string;
  task: string;
  status: string;
  created_at: Date;
};

export const dataTasks: Task[] = [
  {
    id: "abcde",
    task: "Check File on Github",
    status: "todo",
    created_at: new Date(),
  },
  {
    id: "efghi",
    task: "Write Daily Task",
    status: "todo",
    created_at: new Date(),
  },
  {
    id: "jklmn",
    task: "Set last 5 priority",
    status: "todo",
    created_at: new Date(),
  },
  {
    id: "opqrs",
    task: "Do first priority",
    status: "progress",
    created_at: new Date(),
  },
  {
    id: "tuvwx",
    task: "Confirm last task",
    status: "progress",
    created_at: new Date(),
  },
  {
    id: "yzabc",
    task: "Set done finished project",
    status: "done",
    created_at: new Date(),
  },
  {
    id: "defgh",
    task: "Confirm existing resource available",
    status: "done",
    created_at: new Date(),
  },
];
