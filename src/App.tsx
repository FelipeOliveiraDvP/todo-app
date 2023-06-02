import {
  Button,
  Container,
  Card,
  InputGroup,
  Form as BSForm,
  Stack,
} from "react-bootstrap";
import { getTasks } from "./services";
import { TaskItem } from "./components/TaskItem";

function App() {
  const tasks = getTasks();

  console.log(tasks);
  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Card style={{ width: 600 }}>
        <Card.Body>
          <Card.Title>Todo List</Card.Title>
          <Card.Subtitle className="text-muted">
            Organize e controle as tarefas do seu dia
          </Card.Subtitle>
          <form action="#">
            <InputGroup className="my-3">
              <BSForm.Control
                placeholder="Digite qual a sua próxima tarefa"
                aria-label="Digite qual a sua próxima tarefa"
                aria-describedby="todo-task"
              />
              <Button variant="primary" id="button-task-submit" type="submit">
                Salvar
              </Button>
            </InputGroup>
          </form>
          <Stack gap={3}>
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
