import { Router } from 'express';
import { createTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);
router.get('/', (_, res) => {
  res.send('Get all todos');
});
router.patch('/:id', (_, res) => {
  res.send('Update a todo');
});

router.delete('/:id', (_, res) => {
  res.send('Delete a todo');
});

export default router;
