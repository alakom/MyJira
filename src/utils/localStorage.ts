import IProject, { ProjectStatus } from "../models/IProject";
import ITask, { Priority, TaskStatus } from "../models/ITask";

export const getDate = (date: Date): string => {
  return date.toLocaleDateString("ru-RU");
};

export const randomDates = (minDate: number): Date => {
  const currentTimestamp = Date.now();
  const timestamp = currentTimestamp + minDate * 24 * 60 * 60 * 1000;
  return new Date(timestamp);
};

export const generateProjects = (): IProject[] => {
  const res: IProject[] = [];
  const name = "MyProject";
  const statusEntries = Object.entries(ProjectStatus);
  statusEntries.forEach(([key, value]) => {
    const id = res.length + 1;
    if (!isNaN(+key)) {
      res.push({
        id,
        name: name + id.toString(),
        status: +key,
        startDate: getDate(randomDates((+key + 1) * -2)),
      });
    } else {
      res.push({
        id,
        name: name + id.toString(),
        status: +value,
        startDate: getDate(randomDates((+value + 1) * -2)),
      });
    }
  });
  return res;
};

export const getCurrentTimeFormatted = () => {
  const now = new Date();

  const optionsDate = { day: "2-digit", month: "2-digit", year: "numeric" };
  const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: false };

  const datePart = now.toLocaleDateString("ru-RU", optionsDate);
  const timePart = now.toLocaleTimeString("ru-RU", optionsTime);

  return `${datePart} ${timePart}`;
};

export const generateTasks = (projects: IProject[]): ITask[] => {
  const res: ITask[] = [];
  projects.map((project) => {
    if (project.status !== ProjectStatus.DELETED) {
      res.push({
        id: res.length + 1,
        projectId: project.id,
        title: "Запланированная задача",
        description: "Меня скоро начнут выполнять",
        createDate: project.startDate + " 14:00",
        priority: Priority.MEDIUM,
        files: null,
        status: TaskStatus.Queue,
        subTasks: [],
        comments: [],
      });
      res.push({
        id: res.length + 1,
        projectId: project.id,
        title: "Задача в работе",
        description: "Меня уже выполняют",
        createDate: project.startDate + " 15:00",
        workDate: project.startDate + " 15:30",
        priority: Priority.HIGH,
        files: null,
        status: TaskStatus.Development,
        subTasks: [],
        comments: [],
      });
      res.push({
        id: res.length + 1,
        projectId: project.id,
        title: "Задача уже выполнена",
        description: "Меня уже выполнили",
        createDate: project.startDate + " 15:00",
        workDate: project.startDate + " 15:30",
        endDate: project.startDate + " 17:30",
        priority: Priority.LOW,
        files: null,
        status: TaskStatus.Done,
        subTasks: [],
        comments: [],
      });
    }
  });
  return res;
};
