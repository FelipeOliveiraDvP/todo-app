import { Button, Form as BSForm, Stack } from "react-bootstrap";
import { Task } from "../types";

interface Props {
  task: Task;
  onMarkAsDone: (task: Task) => void;
}

export function TaskItem({ task, onMarkAsDone }: Props) {
  function handleMarkAsDone(task: Task) {
    onMarkAsDone({ ...task, done: !task.done });
  }

  return (
    <div className="p-2 border d-flex justify-content-between">
      {task.done ? <del>{task.name}</del> : task.name}
      <Stack direction="horizontal" gap={3}>
        <BSForm.Check
          type="checkbox"
          id={task.id}
          checked={task.done}
          onChange={() => handleMarkAsDone(task)}
        />
        {task.done && <Button variant="danger">Remover</Button>}
      </Stack>
    </div>
  );
}
