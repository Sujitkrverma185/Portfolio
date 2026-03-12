import { Button, ButtonGroup } from "flowbite-react";

function GroupButton({ setFilter }) {
  return (
    <ButtonGroup outline>
      <Button
        color="light"
        onClick={() => setFilter("all")}
        className="!border-slate-600 !text-slate-200 hover:!bg-slate-800 hover:!border-indigo-500 hover:!text-white"
      >
        All
      </Button>
      <Button
        color="light"
        onClick={() => setFilter("mini")}
        className="!border-slate-600 !text-slate-200 hover:!bg-slate-800 hover:!border-indigo-500 hover:!text-white"
      >
        Mini Projects
      </Button>
      <Button
        color="light"
        onClick={() => setFilter("major")}
        className="!border-slate-600 !text-slate-200 hover:!bg-slate-800 hover:!border-indigo-500 hover:!text-white"
      >
        Major Projects
      </Button>
    </ButtonGroup>
  );
}

export default GroupButton;

