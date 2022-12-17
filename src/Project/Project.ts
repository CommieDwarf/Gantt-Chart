import { Task } from "./Task/Task";
import { TaskType } from "gantt-task-react/dist/types/public-types";
import { IProject } from "./IProject";
import { v4 as uuid } from "uuid";

export class Project implements IProject {
  tasks: Task[];
  name: string;
  start: Date;
  end: Date;
  id = uuid();

  constructor(name: string, start: Date, end: Date) {
    this.tasks = [new Task(name, start, end, "project")];
    this.name = name;
    this.start = start;
    this.end = end;
  }

  addTask(name: string, start: Date, end: Date, type: TaskType) {
    this.tasks.push(new Task(name, start, end, type));
  }
}
