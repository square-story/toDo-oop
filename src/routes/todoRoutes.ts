import express from 'express';
import { getTasks, createTask, deleteTask, markTaskComplete, editTask, getEditTaskPage } from '../controllers/TaskController';


const router = express.Router();

router.get('/', getTasks);
router.post('/create', createTask);
router.post('/delete/:id', deleteTask);
router.post('/complete/:id', markTaskComplete);
router.get('/edit/:id', getEditTaskPage);
router.post('/edit/:id', editTask);

export default router;