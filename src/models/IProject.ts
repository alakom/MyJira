export enum ProjectStatus {
  "ACTIVE",
  "DELETED",
  "PAUSED",
}

interface IProject {
  id: number;
  name: string;
  status: ProjectStatus;
  startDate: string;
}

export default IProject;
