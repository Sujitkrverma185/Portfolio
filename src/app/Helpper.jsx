import { Button, ButtonGroup } from "flowbite-react";

function GroupButton({ setFilter }) {
  return (
    <ButtonGroup outline className="shadow-sm">
      <Button
        color="light"
        onClick={() => setFilter("all")}
        className="!border-slate-200 dark:!border-slate-800 !text-slate-700 dark:!text-slate-200 hover:!bg-slate-100 dark:hover:!bg-slate-800/80 hover:!border-indigo-500 hover:!text-indigo-600 dark:hover:!text-white transition-all cursor-pointer font-medium"
      >
        All
      </Button>
      <Button
        color="light"
        onClick={() => setFilter("mini")}
        className="!border-slate-200 dark:!border-slate-800 !text-slate-700 dark:!text-slate-200 hover:!bg-slate-100 dark:hover:!bg-slate-800/80 hover:!border-indigo-500 hover:!text-indigo-600 dark:hover:!text-white transition-all cursor-pointer font-medium"
      >
        Mini Projects
      </Button>
      <Button
        color="light"
        onClick={() => setFilter("major")}
        className="!border-slate-200 dark:!border-slate-800 !text-slate-700 dark:!text-slate-200 hover:!bg-slate-100 dark:hover:!bg-slate-800/80 hover:!border-indigo-500 hover:!text-indigo-600 dark:hover:!text-white transition-all cursor-pointer font-medium"
      >
        Major Projects
      </Button>
    </ButtonGroup>
  );
}

export default GroupButton;

