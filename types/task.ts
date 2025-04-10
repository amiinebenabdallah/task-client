export enum TaskStatus {
  Todo = 'Todo',
  InProgress = 'InProgress',
  Done = 'Done'
}

export enum TaskPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High'
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate: string;
  priority: TaskPriority;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface TasksResponse {
  tasks: Task[];
  total: number;
}

export interface CreateTaskDto {
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate: string;
  priority: TaskPriority;
}

export interface UpdateTaskDto {
  title?: string;
  description?: string;
  status?: TaskStatus;
  dueDate?: string;
  priority?: TaskPriority;
}

export interface FilterTaskDto {
  status?: TaskStatus;
  priority?: TaskPriority;
  search?: string;
} 