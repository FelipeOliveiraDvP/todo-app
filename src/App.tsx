import { Container, Card, Stack } from "react-bootstrap";

import { TaskItem } from "./components/TaskItem";
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Card style={{ width: 600 }}>
        <Card.Body>
          <Card.Title>Todo List</Card.Title>
          <Card.Subtitle className="text-muted">
            Organize e controle as tarefas do seu dia
          </Card.Subtitle>
          <TaskForm />
          <Stack gap={3}>
            {[].map((task) => (
              // <TaskItem key={task.id} task={task} />
              
            ))}
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
