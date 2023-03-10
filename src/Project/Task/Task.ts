import { Task as ITask } from "gantt-task-react";
import { TaskType } from "gantt-task-react/dist/types/public-types";
import { v4 as uuidv4 } from "uuid";

export class Task implements ITask {
  start: Date;
  end: Date;
  id: string = uuidv4();
  name: string;
  progress: number = 0;
  type: TaskType;
  isDisabled = false;
  styles = {
  };

  constructor(name: string, start: Date, end: Date, type: TaskType) {
    this.start = start;
    this.end = end;
    this.name = name;
    this.type = type;
  }
}
