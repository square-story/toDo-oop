export class Task {
    id: string;
    title: string;
    description: string;
    status: string;

    constructor(id: string, title: string, description: string, status: string = 'pending') {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
    markComplete(): void {
        this.status = 'complete';
    }
    markUncomplete(): void {
        this.status = 'pending'
    }
}