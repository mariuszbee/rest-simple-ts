import { Router } from 'express';
import {
  createTodo,
  deleteTodo, findTodo,
  getTodos,
  updateTodo,
} from '../controllers/todos';

const router = Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.get('/:id', findTodo);

export default router;
