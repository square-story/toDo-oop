import { Task } from '../models/Task';
import { UrgentTask } from '../models/UrgentTask';

export class TaskService {
    tasks: Task[] = [];

    createTask(title: string, description: string): Task {
        const task = new Task(`${Date.now()}`, title, description);
        this.tasks.push(task);
        return task;
    }
    createUrgentTask(title: string, description: string, priority: number): UrgentTask {
        const task = new UrgentTask(`${Date.now()}`, title, description, priority);
        this.tasks.push(task);
        return task;
    }
    getTasks(): Task[] {
        return this.tasks;
    }
    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    markTaskComplete(id: string): void {
        const task = this.tasks.find(task => task.id === id);
        if (task) task.markComplete();
    }
    getTaskById(id: string) {
        return this.tasks.find(item => item.id === id)
    }
    editTask(id: string, title: string, description: string) {
        const task = this.getTaskById(id);
        if (task) {
            task.title = title;
            task.description = description;
        }
    }
}