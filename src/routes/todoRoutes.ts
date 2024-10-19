import express from 'express';
import { getTasks, createTask, deleteTask, markTaskComplete, editTask, getEditTaskPage, markTaskUncomplete } from '../controllers/TaskController';


const router = express.Router();

router.get('/', getTasks);
router.post('/create', createTask);
router.post('/delete/:id', deleteTask);
router.post('/complete/:id', markTaskComplete);
router.get('/edit/:id', getEditTaskPage);
router.post('/edit/:id', editTask);
router.post('/uncomplete/:id', markTaskUncomplete);

export default router;