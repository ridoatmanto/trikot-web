export function ExpandButton({
  toggleState,
  clickAction,
}: {
  toggleState: boolean;
  clickAction: any;
}) {
  return (
    <button
      className="block w-full text-white font-medium rounded-lg text-xs py-0 text-center bg-slate-200 dark:bg-slate-800"
      type="button"
      onClick={clickAction}
    >
      {toggleState && (
        <svg
          className="inline block w-[16px] h-[16px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            d="m5 15 7-7 7 7"
          />
        </svg>
      )}
      {!toggleState && (
        <svg
          className="inline block w-[16px] h-[16px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      )}
    </button>
  );
}
