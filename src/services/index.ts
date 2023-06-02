import { LOCAL_STORAGE_KEY } from "../constants";
import { Task } from "../types";

export function getTasks(): Task[] {
  const tasks = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (tasks === null) return [];

  return JSON.parse(tasks);
}

export function createTask(taskName: string): void {
  const tasks = getTasks();
  const newTask = {
    id: `task-${Date.now()}`,
    name: taskName,
    done: false,
  } as Task;

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks.push(newTask)));
}

export function updateTask(updatedTask: Task): void {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);

  if (taskIndex !== -1) {
    tasks[taskIndex].done = updatedTask.done;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }
}

export function removeTask(removedTask: Task): void {
  const tasks = getTasks();

  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(tasks.filter((task) => task.id !== removedTask.id))
  );
}
