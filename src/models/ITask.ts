export enum TaskStatus {
  "Queue",
  "Development",
  "Done",
}

export enum Priority {
  "HIGH",
  "MEDIUM",
  "LOW",
}

interface ITask {
  id: number;
  projectId: number;
  title: string;
  description: string;
  createDate: string;
  workDate?: string;
  endDate?: string;
  priority: Priority;
  files: any;
  status: TaskStatus;
  subTasks: ITask[];
  comments: any[];
}

export default ITask;
