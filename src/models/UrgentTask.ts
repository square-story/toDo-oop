import { Task } from './Task';

export class UrgentTask extends Task {
    priority: number;

    constructor(id: string, title: string, description: string, priority: number) {
        super(id, title, description);
        this.priority = priority;
    }

    escalatePriority(): void {
        this.priority++;
    }
}