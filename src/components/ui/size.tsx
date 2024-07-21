const defaultBackground =
  "px-4 py-2 text-sm font-medium text-gray-900 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white";
const sizeOptionBackground = "bg-white dark:bg-gray-800 " + defaultBackground;
const selectedSizeBackground = "bg-slate-400 " + defaultBackground;

export function Size({
  currentValue,
  changeInputHandle,
}: {
  currentValue: any;
  changeInputHandle: any;
}) {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        className={
          currentValue === "M"
            ? `border rounded-s-lg ${selectedSizeBackground}`
            : `border rounded-s-lg ${sizeOptionBackground}`
        }
        onClick={() => changeInputHandle("M")}
      >
        M
      </button>
      <button
        type="button"
        className={
          currentValue === "L"
            ? `border-t border-b ${selectedSizeBackground}`
            : `border-t border-b ${sizeOptionBackground}`
        }
        onClick={() => changeInputHandle("L")}
      >
        L
      </button>
      <button
        type="button"
        className={
          currentValue === "XL"
            ? `border rounded-e-lg ${selectedSizeBackground}`
            : `border rounded-e-lg ${sizeOptionBackground}`
        }
        onClick={() => changeInputHandle("XL")}
      >
        XL
      </button>
    </div>
  );
}
