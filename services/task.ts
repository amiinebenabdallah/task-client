import { Task, TasksResponse, CreateTaskDto, UpdateTaskDto, FilterTaskDto, TaskStatus, TaskPriority } from '../types/task';
import { apiService } from './api';

class TaskService {
  private static instance: TaskService;

  private constructor() {}

  public static getInstance(): TaskService {
    if (!TaskService.instance) {
      TaskService.instance = new TaskService();
    }
    return TaskService.instance;
  }

  public async getTasks(filter?: FilterTaskDto): Promise<TasksResponse> {
    const queryParams = new URLSearchParams();
    if (filter) {
      Object.entries(filter).forEach(([key, value]) => {
        if (value) {
          queryParams.append(key, value);
        }
      });
    }
    return apiService.request<TasksResponse>(`/tasks?${queryParams.toString()}`);
  }

  public async getTask(id: number): Promise<Task> {
    return apiService.request<Task>(`/tasks/${id}`);
  }

  public async createTask(task: CreateTaskDto): Promise<Task> {
    return apiService.request<Task>('/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
    });
  }

  public async updateTask(id: number, task: UpdateTaskDto): Promise<Task> {
    return apiService.request<Task>(`/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(task),
    });
  }

  public async deleteTask(id: number): Promise<void> {
    return apiService.request<void>(`/tasks/${id}`, {
      method: 'DELETE',
    });
  }
}

export const taskService = TaskService.getInstance();
export { TaskStatus, TaskPriority };
export type { Task, TasksResponse, CreateTaskDto, UpdateTaskDto, FilterTaskDto }; 