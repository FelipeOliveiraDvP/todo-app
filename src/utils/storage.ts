import { LOCAL_STORAGE_KEY } from "../constants";
import { Task } from "../types";

export function getTasks(): Task[] {
  const tasks = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (tasks === null) return [];

  return JSON.parse(tasks);
}

export function setTasks(tasks: Task[]): void {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}
