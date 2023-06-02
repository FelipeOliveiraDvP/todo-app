import { CreateTask, Task } from "../types";

export function createTask(tasks: Task[], task: CreateTask): Task[] {
  const newTask = {
    id: `task-${Date.now()}`,
    name: task.name,
    done: false,
  } as Task;

  return [...tasks, newTask];
}

export function updateTask(tasks: Task[], task: Task): Task[] {
  const taskIndex = tasks.findIndex((t) => t.id === task.id);

  if (taskIndex !== -1) {
    tasks[taskIndex].done = task.done;
  }

  return tasks;
}

export function removeTask(tasks: Task[], task: Task): Task[] {
  return tasks.filter((t) => t.id !== task.id);
}
