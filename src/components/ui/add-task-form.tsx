export function AddTaskForm({
  currentValue,
  changeInputHandle,
  submitAction,
}: {
  currentValue: any;
  changeInputHandle: any;
  submitAction: any;
}) {
  return (
    <form
      onSubmit={submitAction}
      method="post"
      id="add-task-form"
      className="mt-2"
    >
      <input
        type="text"
        name="new-task"
        value={currentValue}
        onChange={changeInputHandle}
        className="w-5/6 bg-slate-100 text-slate-500 dark:bg-slate-500 dark:text-slate-300 border-2 border-solid border-slate-300 dark:border-slate-500 text-sm py-1 px-1 rounded-lg"
        placeholder="New Task..."
      />{" "}
      <button
        type="submit"
        className="border-1 border-slate-500 bg-slate-500 hover:bg-slate-400 rounded-lg px-1.5 text-white text-xs"
      >
        Add
      </button>
    </form>
  );
}
