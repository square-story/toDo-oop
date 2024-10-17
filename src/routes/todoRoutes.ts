import express from 'express';
import { getTasks, createTask, deleteTask, markTaskComplete } from '../controllers/TaskController';


const router = express.Router();

router.get('/', getTasks);
router.post('/create', createTask);
router.post('/delete/:id', deleteTask);
router.post('/complete/:id', markTaskComplete);

export default router;