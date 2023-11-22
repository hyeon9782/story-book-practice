import { input } from "../styles/task.css";

type Props = {
  task: { id: string; title: string; state: string };
  onArchiveTask: () => void;
  onPinTask: () => void;
};
const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: Props) => {
  return (
    <div>
      <input type="text" value={title} readOnly={true} className={input} />
    </div>
  );
};

export default Task;
