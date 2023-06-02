import { useEffect, useState } from "react";
import { Container, Card, Stack } from "react-bootstrap";

import { TaskItem } from "./components/TaskItem";
import { TaskForm } from "./components/TaskForm";
import { CreateTask, Task } from "./types";
import { getTasks, saveTasks } from "./utils/storage";
import { createTask, updateTask } from "./services";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateTask(obj: CreateTask) {
    commitTasks(createTask(tasks, obj));
  }

  function handleMarkAsDone(task: Task) {
    commitTasks(updateTask(tasks, task));
    refreshTasks();
  }

  function commitTasks(tasks: Task[]) {
    saveTasks(tasks);
    setTasks(tasks);
  }

  function refreshTasks() {
    setTasks(getTasks());
  }

  useEffect(() => {
    refreshTasks();

    return () => setTasks([]);
  }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Card style={{ width: 600 }}>
        <Card.Body>
          <Card.Title>Todo List</Card.Title>
          <Card.Subtitle className="text-muted">
            Organize e controle as tarefas do seu dia
          </Card.Subtitle>
          <TaskForm onCreate={handleCreateTask} />
          <Stack gap={3}>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onMarkAsDone={handleMarkAsDone}
              />
            ))}
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
