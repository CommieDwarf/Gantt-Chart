import { TaskType } from "gantt-task-react/dist/types/public-types";
import { Task } from "gantt-task-react";

export interface IProject {
  tasks: Task[];
  name: string;
  start: Date;
  end: Date;
  id: string;

  addTask: (name: string, start: Date, end: Date, type: TaskType) => void;
}
