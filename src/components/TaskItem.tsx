import { Button, Form as BSForm } from "react-bootstrap";
import { Task } from "../types";

interface Props {
  task: Task;
}

export function TaskItem({ task }: Props) {
  return (
    <div className="p-2 border d-flex justify-content-between">
      {task.name}
      <BSForm.Check type="checkbox" id={task.id} />
      {task.done && <Button variant="danger">Remover</Button>}
    </div>
  );
}
