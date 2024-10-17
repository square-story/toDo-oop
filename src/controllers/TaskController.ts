import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService';

const taskService = new TaskService();


export const getTasks = (req: Request, res: Response) => {
    const tasks = taskService.getTasks();
    res.render('tasks', { tasks });
};

export const createTask = (req: Request, res: Response) => {
    const { title, description } = req.body;
    taskService.createTask(title, description);
    res.redirect('/');
};


export const deleteTask = (req: Request, res: Response) => {
    const { id } = req.params;
    taskService.deleteTask(id);
    res.redirect('/');
};

export const markTaskComplete = (req: Request, res: Response) => {
    const { id } = req.params;
    taskService.markTaskComplete(id);
    res.redirect('/');
};